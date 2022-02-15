import {IUsersRepository} from "../../repositories/iusers-repository";

export class UserLoginUseCase {
  constructor(
    private userRepository: IUsersRepository
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    return user;
  }
}
