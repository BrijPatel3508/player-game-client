import axios from "axios";
import authHeader from './auth-header';
import { environment } from "../environment/environment";

const ValidationService = {

    saveGame(game) {
        return axios.post(environment.saveGameApi, game, { headers: authHeader() });
    },

    getGames() {
        return axios.get(environment.getGames, { headers: authHeader() });
    },

    getUsers() {
        return axios.get(environment.users, { headers: authHeader() });
    }
};

export default ValidationService;