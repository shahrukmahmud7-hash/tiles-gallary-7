import dns from "dns";
dns.setDefaultResultOrder("ipv4first");


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
console.log(process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("tilesgallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 
}); 