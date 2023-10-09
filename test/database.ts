import { promises } from "dns";
import { query } from "express";
import { Client } from "pg";

export async function databaseConnect(query: string): Promise<any> {
    const client = new Client({
      user: "postgres",
      password: "s5620925",
      host: "localhost",
      port: 5432,
      database: "Test"
    });

    try {
      await client.connect();
      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    } 
}