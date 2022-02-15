import {MongoUsersRepository} from "../../repositories/implementations/mongo-users-repository";
import {UserLoginController} from "./user-login-controller";
import {UserLoginUseCase} from "./user-login-use-case";

const mongoUsersRepository = new MongoUsersRepository();
const userLoginUseCase = new UserLoginUseCase(mongoUsersRepository);
const userLoginController = new UserLoginController(userLoginUseCase);

export {userLoginUseCase, userLoginController};
