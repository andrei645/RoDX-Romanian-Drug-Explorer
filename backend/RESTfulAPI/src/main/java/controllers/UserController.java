package controllers;

import api.UserApi;
import exceptions.NotFoundException;
import handlers.Response;
import models.User;
import services.UserService;
import utils.PasswordEncryptor;

import java.security.NoSuchAlgorithmException;


public class UserController implements UserApi {
    @Override
    public User getUserByEmail(String email) throws NotFoundException {
        User user = UserService.findUserByEmail(email);
        if (user == null) {
            throw new NotFoundException(String.format("User with email : %s not found", email));
        }
        return user;
    }

    @Override
    public Response updateUser(User user) throws NotFoundException, NoSuchAlgorithmException {

        User existingUser = UserService.findUserByEmail(user.getEmail());
        if (existingUser == null) {
            throw new NotFoundException("User not found");
        }

        existingUser.setUsername(user.getUsername());
        existingUser.setPasswordHash(PasswordEncryptor.encryptPassword(user.getPasswordHash()));

        UserService.updateUser(existingUser);

        return Response.ok();
    }

    @Override
    public Response deleteUser(String email) throws NotFoundException {
        if (UserService.findUserByEmail(email) == null) {
            throw new NotFoundException(String.format("User with email: %s can't be found", email));
        }

        UserService.deleteUser(email);
        return Response.ok();
    }
}
