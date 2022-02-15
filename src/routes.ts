import {Router} from "express";
import {createUserController} from "./use-cases/create-user";
import {userLoginController} from "./use-cases/user-login";

const router = Router();

router.post('/users/signup', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/users/login', (request, response) => {
  return userLoginController.handle(request, response);
})

export {router};
