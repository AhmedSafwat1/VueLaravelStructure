import  Api from "./Api";
import { authHeader } from '../_helpers';


// this function to treat with user as api service
export const userService = {
    login,
    logout,
    getAll
};

function login(user_id) {
    return Api().post("user_offline",{user_id,status:1})
}

function logout(user_id) {
    return Api().post("user_offline",{user_id})
}

function getAll() {

}
