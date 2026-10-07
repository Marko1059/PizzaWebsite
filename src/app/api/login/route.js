import { MongoClient } from "mongodb";

export async function POST(req) {
  const body = await req.json();

  const client = await MongoClient.connect("mongodb://root:example@localhost:27017");
  const db = client.db("app");

  const user = await db.collection("users").findOne({
    email: body.email,
    password: body.password,
  });

  if (user) {
    return Response.json({ success: true, user: user, });
  } else {
    return Response.json({ success: false });
  }
}