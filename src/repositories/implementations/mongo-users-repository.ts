import {User} from "../../entities/user";
import {IUsersRepository} from "../iusers-repository";

export class MongoUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return new Promise((resolve) => resolve(user));
  }

  async save(user: User): Promise<void> {
      this.users.push(user);
  }
}