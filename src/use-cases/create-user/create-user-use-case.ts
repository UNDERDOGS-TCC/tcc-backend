import {User} from "../../entities/user";
import {IUUIDProvider} from "../../providers/iuuid-provider";
import {IUsersRepository} from "../../repositories/iusers-repository";
import {ICreateUserDTO} from "./create-user-dto";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUsersRepository,
    private uuidProvider: IUUIDProvider,
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const uuid = this.uuidProvider.generateId();

    const user = new User(data.name, data.email, data.password, uuid);

    await this.userRepository.save(user);
  }
}
