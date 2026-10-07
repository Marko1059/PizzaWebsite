import { MongoClient } from "mongodb";

export async function GET() {
  const client = await MongoClient.connect("mongodb://root:example@localhost:27017");
  const db = client.db("app");

  const cart = await db.collection("cart").find().toArray();

  return Response.json(cart);
}