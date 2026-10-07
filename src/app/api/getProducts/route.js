import { MongoClient } from "mongodb";

export async function GET() {
  const client = await MongoClient.connect("mongodb://root:example@localhost:27017");

  const db = client.db("app");

  const products = await db
    .collection("products")
    .find()
    .toArray();

  return Response.json(products);
}