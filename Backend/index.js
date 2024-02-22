const express = require("express");
require("./db/config");
// users file
const User = require("./db/user");
// admission file
const Addmission = require("./db/admission");
// contact file
const Contact = require("./db/contact");
// Events file
const Events = require("./db/events");
// ADMIN DETAILS FILE
const Admin = require("./db/admin");

const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

// SIGN UP OR LOGIN

app.post("/sign-up", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

// get and delete user

app.get("/users", async (req, res) => {
  let user = await User.find(req.body);
  if (user) {
    res.send(user);
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  let user = await User.deleteOne({ _id: req.params.id });
  if (user) {
    res.send(user);
  }
});


// ADMISSION FORM

app.post("/admission", async (req, res) => {
  let admission = new Addmission(req.body);
  let result = await admission.save();
  res.send(result);
});

// get admission forms
app.get("/admissionforms", async (req, res) => {
  let getAddForms = await Addmission.find(req.body);
  if (getAddForms) {
    res.send(getAddForms);
  }
});

// CONTACT US

app.post("/contacts", async (req, res) => {
  let contact = new Contact(req.body);
  let result = await contact.save();
  res.send(result);
});

app.get("/contact-forms", async (req, res) => {
  let contactForm = await Contact.find(req.body);
  if (contactForm) {
    res.send(contactForm);
  } else {
    res.send("No Contact Forms");
  }
});

app.delete("/deleteContect/:id", async (req, res) => {
  let deleteContact = await Contact.deleteOne({ _id: req.params.id });
  res.send(deleteContact);
});

// EVENTS

// adding
app.post("/events", async (req, res) => {
  let events = new Events(req.body);
  let result = await events.save();
  res.send(result);
});

// catching or getting

app.get("/getevents", async (req, res) => {
  let events = await Events.find(req.body);
  if (events) {
    res.send(events);
  } else {
    res.send({ result: "no events found" });
  }
});

// delete the event
app.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const result = await Events.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// get the events for update the event
app.get("/updateEvent/:id", async (req, res) => {
  let result = await Events.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("please select any event...");
  }
});

// update the getting event
app.put("/updateEvent/:id", async (req, res) => {
  let result = await Events.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

// ADMIN The whole website owner LOGINS DETAILS

app.post("/admin-signup", async (req, res) => {
  let admin = new Admin(req.body);
  let result = await admin.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/admin-details", async (req, res) => {
  if (req.body.password && req.body.name) {
    let admin = await Admin.findOne(req.body).select("-password");
    if (admin) {
      res.send({ name: admin.name }); // Sending just the name
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

app.listen(3000);
