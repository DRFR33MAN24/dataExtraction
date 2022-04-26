const glob = require("glob");
const fs = require("fs");
const db = require("./database");
const Contact = require("./models/Contact");
const Stat = require("./models/Stat");

let count = 0;
let files = glob.sync("./files/*.json");

try {
  (async function() {
    await db.authenticate();
  })();
  db.sync({ force: false });
  console.log("Authenticated");
} catch (err) {
  console.log("Unable to connect", err);
}

files.map(f => {
  let file = fs.readFileSync(f);
  let data = JSON.parse(file);
  let contacts = [];
  for (const key in data.contacts) {
    const name = data.contacts[key].name;
    const phone = data.contacts[key].phone;
    contacts.push({ name: name, phone: phone, userId: "moataz123" });
  }
  try {
    (async function() {
      await Contact.bulkCreate(contacts);
    })();
  } catch (error) {
    console.log(error);
  }
  count += Object.keys(data.contacts).length;
  try {
    (async function() {
      await Stat.increment("total_contacts", { by: count, where: { id: 1 } });
    })();
  } catch (error) {
    console.log(error);
  }
});
console.log("Moved contacts is: ", count);
