function handler(req, res) {
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
    console.log(newMessage);

    res.status(201).json({ message: "Success!", message: newMessage });
  }
}
