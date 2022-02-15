export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public readonly id?: string,
    ) {
    if (!id) {
      this.id = Math.random().toString(36);
    }
  }
}