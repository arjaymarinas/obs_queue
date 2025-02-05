import { getUsers, getUserById } from "../models/usersModel.js";

export const fetchAllUsers = async () => {
    return await getUsers();
}

export const fetchUserById = async (id) => {
    return await getUserById(id);
}