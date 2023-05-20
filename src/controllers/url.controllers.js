import { db } from "../database/database.js";

export async function createUrl(req, res) {
    const { url } = req.body;
    const { userId } = res.locals;

    try {
        await db.query(`
                INSERT INTO "shortenedUrls" ("userId", "url", "shortUrl", "visitCount")
                VALUES ($1, $2, $3, $4);`, [userId, url, "https://roll20.net", 1]);

        const urlId = await db.query(`
        SELECT "shortenedUrls".id 
        FROM "shortenedUrls" 
        WHERE "shortenedUrls"."userId" = $1 `, [userId])

        const answer = { id: urlId.rows[0].id, shortUrl: url }

        res.status(201).send(answer)

    } catch (err) {
        res.status(500).send(err.message);
    }
}