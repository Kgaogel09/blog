import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }

    //Store it in a data base
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://thorn:IRI0MuXdi2kEBUaE@cluster0.naxcy.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect too the database!" });
      return;
    }

    const db = client.db();

    try {
      const results = await db.collection("messages").insertOne(newMessage);
      newMessage.id = results.insertId;
    } catch (error) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Success!", message: newMessage });
  }
}

export default handler;
