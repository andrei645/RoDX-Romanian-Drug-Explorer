const http = require("http");
const url = require("url");
const { fetchSeizuresData } = require("./models/DrugsModel");

const requestHandler = async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === "GET" && parsedUrl.pathname === "/seizures") {
        try {
            const data = await fetchSeizuresData();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
        } catch (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error.");
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
};


const server = http.createServer(requestHandler);
const PORT = 5000;


server.listen(PORT, () => {
    console.log(`Serverul rulează la adresa http://localhost:${PORT}`);
});
