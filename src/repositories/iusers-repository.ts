import {User} from "../entities/user";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
}
