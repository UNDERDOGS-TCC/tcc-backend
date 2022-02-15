import {UUIDProvider} from "../../providers/implementations/uuid-provider";
import {MongoUsersRepository} from "../../repositories/implementations/mongo-users-repository";
import {CreateUserController} from "./create-user-controller";
import {CreateUserUseCase} from "./create-user-use-case";

const uuidProvider = new UUIDProvider();
const mongoUsersRepository = new MongoUsersRepository();
const createUserUseCase = new CreateUserUseCase(mongoUsersRepository, uuidProvider);
const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController};