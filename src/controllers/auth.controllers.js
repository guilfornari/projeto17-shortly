import { db } from "../database/database.js";
import bcrypt from "bcrypt";


export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) return res.status(422).send("pw not a match");

    try {

        const user = await db.query(`SELECT users.email FROM users WHERE email = $1;`, [email]);
        if (user.rows[0]) return res.status(409).send("E-mail already registered");

        const hash = bcrypt.hashSync(password, 10);

        await db.query(`
                INSERT INTO users ("name", "email", "password")
                VALUES ($1, $2, $3);`, [name, email, hash]);

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}