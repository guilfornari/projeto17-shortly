import { db } from "../database/database.js";


export async function signUp(req, res) {
    const { name, image } = req.body;

    try {

        const user = await db.query(`SELECT user.name FROM users WHERE name = $1;`, [name]);
        if (user.rows[0]) return res.sendStatus(400);

        await db.query(`
                INSERT INTO users ("name", "image")
                VALUES ($1, $2);`, [name, image]);

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}