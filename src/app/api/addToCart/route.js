import { MongoClient } from "mongodb";

export async function POST(req) {
  const body = await req.json();

  const client = await MongoClient.connect("mongodb://root:example@localhost:27017");
  const db = client.db("app");

  await db.collection("cart").insertOne(body);

  return Response.json({ success: true });
}