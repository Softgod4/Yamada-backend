import { Client } from "pg";

export class Database {
	client: Client;

	constructor() {
		this.client = new Client({
			      user: "postgres",
			      password: "s5620925",
			      host: "localhost",
			      port: 5432,
			      database: "Test"
			    });
	}

	public async addUser(query: string): Promise<void | any[]> {
		await this.client.connect();
       	const result = await this.client.query(`INSERT INTO public."Backend" (pics_number) VALUES (${query})`);
	   	return result.rows;
	}
}
