import { randomUUID } from "crypto";
import sql from './db.js';

export class DatabasePostgres {

    #videos;

    async list(search) {

        if (search) {
            this.#videos = await sql`SELECT * FROM videos WHERE title ilike ${'%' + search + '%'};`
        } else {
            this.#videos = await sql`SELECT * FROM videos;`
        }

        return this.#videos;
    }

    async create(video) {

        const videoId = randomUUID();
        const { title, description, duration } = video;
        await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration});`
    }

    async update(id, video) {
        const { title, description, duration } = video;
        await sql`UPDATE videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id};`
    }

    async delete(id) {
        await sql`DELETE FROM videos WHERE id = ${id};`
    }

}