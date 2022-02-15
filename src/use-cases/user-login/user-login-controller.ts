import {UserLoginUseCase} from "./user-login-use-case";
import {Request, Response} from "express";

export class UserLoginController {
  constructor(
    private userLoginUseCase: UserLoginUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {email, password} = request.body;

    try {
      const user = await this.userLoginUseCase.execute(email, password);

      return response.status(200).json(user);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
