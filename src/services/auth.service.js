import axios from "axios";
import { environment } from "../environment/environment";

class AuthService {
    login(username, password) {
        return axios
            .post(environment.signInApi, {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios.post(environment.signUpApi, {
            username,
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();