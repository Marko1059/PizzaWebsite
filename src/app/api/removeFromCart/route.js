import { MongoClient, ObjectId } from "mongodb";

export async function POST(req) {
  const body = await req.json();

  const client = await MongoClient.connect("mongodb://root:example@localhost:27017");
  const db = client.db("app");

  await db.collection("cart").deleteOne({
    _id: new ObjectId(body.id),
  });

  return Response.json({ success: true });
}