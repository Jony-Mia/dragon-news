import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare or Google DNS

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("dragon-news");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: mongodbAdapter(db, {
        client
    }),
});