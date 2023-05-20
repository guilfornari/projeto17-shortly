import { db } from "../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) return res.status(422).send("pw not a match");

    try {

        const user = await db.query(`SELECT users.email FROM users WHERE users.email = $1;`, [email]);
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

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.query(`
        SELECT
            users.id, 
            users.email, 
            users.password 
            FROM users WHERE users.email = $1`, [email]);

        if (user.rowCount === 0) return res.status(401).send("E-mail not registered");
        const checkPw = bcrypt.compareSync(password, user.rows[0].password);
        if (!checkPw) return res.status(401).send("Incorrect password");

        const token = uuid();
        await db.query(`INSERT INTO sessions ("userId", "token") VALUES ($1, $2);`, [user.rows[0].id, token]);

        return res.status(200).send({ token: token });

    } catch (err) {
        return res.status(500).send(err.message);
    }
}

