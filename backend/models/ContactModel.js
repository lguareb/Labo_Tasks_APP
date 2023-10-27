const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
      Name: "String",
      Phone: "Number",
      Email: "String"
    },
    {
      timestamps: true,
    }
  );

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;