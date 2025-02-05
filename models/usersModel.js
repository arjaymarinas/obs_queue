import { query } from '../config/db.js';

export const getUsers = async () => {
    const result = await query("SELECT * FROM users");
    return result.rows;
};

export const getUserById = async (id) => {
    const result = await query ("SELECT * FROM users where userid = $1", [id]);
    return result.rows[0];
}
