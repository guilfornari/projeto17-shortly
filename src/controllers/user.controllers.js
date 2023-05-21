import { db } from "../database/database.js";

export async function getUser(req, res) {
    const { userId } = res.locals;

    try {
        const user = await db.query(`
        SELECT
        SUM("visitCount") AS "visitCount",
        "shortenedUrls"."userId",
        users.name
        FROM "shortenedUrls"
        JOIN users ON "shortenedUrls"."userId" = users.id
        WHERE "shortenedUrls"."userId" = $1
        GROUP BY users.name, "shortenedUrls"."userId";`, [userId]);

        const userUrls = await db.query(`
         SELECT 
         "shortenedUrls".id, 
         "shortenedUrls"."shortUrl", 
         "shortenedUrls".url, 
         "shortenedUrls"."visitCount"
         FROM "shortenedUrls"
         WHERE "shortenedUrls"."userId" = $1;`, [userId]);

        const answer = {
            id: userId,
            name: user.rows[0].name,
            visitCount: user.rows[0].visitCount,
            shortenedUrls: userUrls.rows
        }

        res.status(200).send(answer);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getRanking(req, res) {

    try {
        const ranking = await db.query(`SELECT * FROM "shortenedUrls";`);

        res.status(200).send(ranking);

    } catch (err) {
        res.status(500).send(err.message);
    }
}