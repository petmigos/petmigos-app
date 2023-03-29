import { User } from "../../entities/user";
import UserService from "../../services/userService";

export class FindById {
  constructor(private readonly userService: UserService) {}

  async execute(user_id: string): Promise<User | undefined>  {
    return this.userService.findById(user_id);
  }
}
