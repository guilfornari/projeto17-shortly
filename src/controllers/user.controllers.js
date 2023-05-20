import { db } from "../database/database.js";

export async function getUser(req, res) {
    const { userId } = res.locals;

    try {
        const user = await db.query(`
        SELECT 
        "shortenedUrls".id, 
        "shortenedUrls"."shortUrl", 
        "shortenedUrls".url, 
        "shortenedUrls"."visitCount",
        users.name
        FROM "shortenedUrls"
        JOIN users ON "shortenedUrls"."userId" = users.id
        WHERE "shortenedUrls"."userId" = $1;`, [userId]);

        console.table(user.rows);

        const answer = {
            id: userId,
            name: user.rows[0].name,
            visitCount: user.rows[0].visitCount,
            shortenedUrls: [ //fazer um map...
                {
                    id: user.rows[0].id,
                    shortUrl: user.rows[0].shortUrl,
                    url: user.rows[0].url,
                    visitCount: user.rows[0].visitCount
                }
            ]
        }

        res.status(200).send(answer);

    } catch (err) {
        res.status(500).send(err.message);
    }
}