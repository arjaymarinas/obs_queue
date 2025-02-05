import { fetchAllUsers, fetchUserById } from "../services/userService.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await fetchAllUsers();
        res.status(200).json(users);
        console.log(users);
    }catch (error){
        res.status(500).json({message: 'Error fetcing users', error: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await fetchUserById(req.params.id)

        if(!user){
            return res.status(404).json({message: 'User not  found'})
        }

        res.status(200).json(user);
        console.log(user);
    } catch (error) {
        res.status(500).json({messsage: 'Error fetching user', error: error.message})
    }
}