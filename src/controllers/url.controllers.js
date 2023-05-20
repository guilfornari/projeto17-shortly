import { db } from "../database/database.js";
import { nanoid } from "nanoid";

export async function createUrl(req, res) {
    const { url } = req.body;
    const { userId } = res.locals;
    const shortUrl = nanoid();

    try {
        await db.query(`
                INSERT INTO "shortenedUrls" ("userId", "url", "shortUrl", "visitCount")
                VALUES ($1, $2, $3, $4);`, [userId, url, shortUrl, 0]);

        const urlId = await db.query(`
        SELECT "shortenedUrls".id 
        FROM "shortenedUrls" 
        WHERE "shortenedUrls"."shortUrl" = $1;`, [shortUrl]);

        const answer = { id: urlId.rows[0].id, shortUrl: shortUrl };

        res.status(201).send(answer);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getOneUrl(req, res) {
    const { id } = req.params;

    try {

        const oneUrl = await db.query(`
        SELECT "shortenedUrls"."shortUrl", "shortenedUrls".url
        FROM "shortenedUrls" 
        WHERE "shortenedUrls".id = $1;`, [id]);

        if (oneUrl.rowCount === 0) return res.sendStatus(404);

        const answer = { id: id, shortUrl: oneUrl.rows[0].shortUrl, url: oneUrl.rows[0].url };

        res.status(200).send(answer);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function redirectTo(req, res) {
    const { shortUrl } = req.params;

    try {
        const oneUrl = await db.query(`
        SELECT "shortenedUrls".url, "shortenedUrls"."visitCount"
        FROM "shortenedUrls" 
        WHERE "shortenedUrls"."shortUrl" = $1;`, [shortUrl]);

        if (oneUrl.rowCount === 0) return res.sendStatus(404);

        const addCount = oneUrl.rows[0].visitCount + 1;

        await db.query(`
        UPDATE "shortenedUrls"
        SET "visitCount" = $1
        WHERE "shortenedUrls"."shortUrl" = $2`, [addCount, shortUrl]);

        res.redirect(oneUrl.rows[0].url);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params;
    const { userId } = res.locals;

    try {
        const oneUrl = await db.query(`
        SELECT "shortenedUrls".id, "shortenedUrls"."userId"
        FROM "shortenedUrls" WHERE "shortenedUrls".id = $1;`, [id]);

        if (oneUrl.rowCount === 0) return res.sendStatus(404);
        if (userId !== oneUrl.rows[0].userId) return res.sendStatus(401);

        await db.query(`DELETE FROM "shortenedUrls"
             WHERE "shortenedUrls".id = $1;`, [id]);

        res.sendStatus(204);

    } catch (err) {
        res.status(500).send(err.message);
    }
}
