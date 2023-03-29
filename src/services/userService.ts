import { ip } from "../entities/ip";
import { id_user } from "../screens/LoginScreen";
import { User } from "../entities/user";

export default class UserService {

    async fetchUser() {
        
        const response = await fetch(
          `http://${ip}:3333/users/${id_user}`
        );

        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }
}