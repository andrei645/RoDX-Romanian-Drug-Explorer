export const loadHTMLFileIntoSection = (filePath, sectionId, scriptName) => {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
   
            document.getElementById(sectionId).innerHTML = htmlContent;
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptName;
           
            document.body.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('There was a problem fetching the HTML file:', error);
        });
};

export const romanianCounties = [
    { name: "Alba", population: 342376, description: "County in Transylvania, known for its mountainous landscapes and rich history." },
    { name: "Arad", population: 320918, description: "County located in western Romania, characterized by its diverse agriculture and cultural heritage." },
    { name: "Arges", population: 612431, description: "County in southern Romania, renowned for its medieval monasteries and picturesque landscapes." },
    { name: "Bacau", population: 616168, description: "County in eastern Romania, known for its cultural heritage and natural beauty." },
    { name: "Bihor", population: 600246, description: "County in western Romania, famous for its vineyards and historical sites." },
    { name: "Bistrita-Nasaud", population: 288525, description: "County in northern Romania, known for its scenic landscapes and traditional villages." },
    { name: "Botosani", population: 412626, description: "County in northeastern Romania, characterized by its fertile plains and historical landmarks." },
    { name: "Braila", population: 321603, description: "County in eastern Romania, located along the Danube River and known for its maritime heritage." },
    { name: "Brasov", population: 566225, description: "County in central Romania, famous for its medieval castles and picturesque mountain resorts." },
    { name: "Bucuresti", population: 1883425, description: "The capital city of Romania, known for its eclectic architecture, vibrant culture, and historical landmarks." },
    { name: "Buzau", population: 432054, description: "County in southeastern Romania, known for its scenic beauty and historical monuments." },
    { name: "Calarasi", population: 299429, description: "County in southeastern Romania, situated along the Danube River and known for its wetlands and wildlife." },
    { name: "Caras-Severin", population: 295579, description: "County in southwestern Romania, characterized by its rugged mountains and natural parks." },
    { name: "Cluj", population: 715151, description: "County in northwestern Romania, known for its vibrant student life, cultural events, and historical landmarks." },
    { name: "Constanta", population: 684082, description: "County in southeastern Romania, located along the Black Sea coast and known for its beaches and resorts." },
    { name: "Covasna", population: 206261, description: "County in central Romania, known for its thermal spas and natural reserves." },
    { name: "Dambovita", population: 518745, description: "County in southern Romania, known for its historical sites and traditional crafts." },
    { name: "Dolj", population: 660544, description: "County in southwestern Romania, known for its agricultural production and historical landmarks." },
    { name: "Galati", population: 536167, description: "County in eastern Romania, situated along the Danube River and known for its maritime heritage." },
    { name: "Giurgiu", population: 281422, description: "County in southern Romania, located along the Danube River and known for its historical monuments." },
    { name: "Gorj", population: 337320, description: "County in southwestern Romania, known for its natural beauty and historical landmarks." },
    { name: "Harghita", population: 310186, description: "County in central Romania, known for its scenic landscapes and rich cultural heritage." },
    { name: "Hunedoara", population: 382747, description: "County in western Romania, famous for its medieval castles and industrial heritage." },
    { name: "Ialomita", population: 258669, description: "County in southeastern Romania, known for its agricultural production and natural reserves." },
    { name: "Iasi", population: 772348, description: "County in northeastern Romania, known for its vibrant cultural scene, historical architecture, and prestigious university." },
    { name: "Ilfov", population: 486321, description: "County surrounding the capital city of Bucharest, known for its affluent suburbs and industrial zones." },
    { name: "Maramures", population: 477304, description: "County in northern Romania, famous for its wooden churches, traditional villages, and scenic landscapes." },
    { name: "Mehedinti", population: 254308, description: "County in southwestern Romania, known for its natural beauty and historical monuments." },
    { name: "Mures", population: 550846, description: "County in central Romania, known for its cultural diversity, historical sites, and natural reserves." },
    { name: "Neamt", population: 470766, description: "County in northeastern Romania, known for its medieval monasteries, picturesque landscapes, and cultural events." },
    { name: "Olt", population: 415115, description: "County in southern Romania, known for its historical sites and natural beauty." },
    { name: "Prahova", population: 810872, description: "County in southern Romania, famous for its mountain resorts, historic sites, and natural parks." },
    { name: "Satu Mare", population: 329079, description: "County in northwestern Romania, known for its cultural heritage and agricultural production." },
    { name: "Salaj", population: 224384, description: "County in northwestern Romania, known for its traditional villages and natural landscapes." },
    { name: "Sibiu", population: 422376, description: "County in central Romania, famous for its medieval architecture, cultural events, and picturesque landscapes." },
    { name: "Suceava", population: 630241, description: "County in northeastern Romania, known for its painted monasteries, traditional crafts, and scenic beauty." },
    { name: "Teleorman", population: 358639, description: "County in southern Romania, known for its agricultural production and historical landmarks." },
    { name: "Timis", population: 708588, description: "County in western Romania, known for its industrial development, cultural diversity, and historical sites." },
    { name: "Tulcea", population: 201462, description: "County in southeastern Romania, situated in the Danube Delta Biosphere Reserve and known for its natural beauty and wildlife." },
    { name: "Valcea", population: 355664, description: "County in southern Romania, known for its thermal spas, historical sites, and natural reserves." },
    { name: "Vaslui", population: 395499, description: "County in eastern Romania, known for its agricultural production, historical landmarks, and traditional crafts." },
    { name: "Vrancea", population: 318316, description: "County in eastern Romania, known for its vineyards, historical sites, and cultural events." }
];

