import UserService from "../../services/userService";

export class FindById {
  constructor(private readonly userService: UserService) {}

  async execute() {
    return await this.userService.findById();
  }
}
