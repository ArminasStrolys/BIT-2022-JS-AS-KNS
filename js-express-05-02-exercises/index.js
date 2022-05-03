import express from "express";
import { create } from "express-handlebars";
import { faker } from "@faker-js/faker";

import fs from "fs/promises";
const app = express();
const hbs = create({
  /* config */
});

const address = faker.address.city();
const car = faker.vehicle.vehicle();
const name = faker.name.firstName();
const photo = faker.image.avatar();
const phone = faker.phone.phoneNumber();
const workPlace = faker.company.companyName();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", (req, res) => {
  let variables = {
    name: name,
    address: address,
    car: car,
    photo: photo,
    phone: phone,
    workPlace: workPlace,
  };
  res.render("card", variables);
});

app.get("/second", async (req, res) => {
let json = []
try{
    const data = await fs.readFile("./data.json", "utf8");
    let parsedJson = JSON.parse(data);
    json = parsedJson
} catch {
    console.log('No data')
}
  res.render("second", {json});
});

app.listen(3000);

// Panaudokite prisegtą JSON failą. Programiškai jį atsidarykite pasinaudodami filesystem nodejs moduliu.
// Konvertuokite stringą į javascript masyvą ir perduokite duomenis į handlebars šabloną kuriame aprašykite
// atvaizdavimo html kodą ir pozicijas kuriose turėtų atsidurti kintamieji.
// Panaudokite if ir each funkcionalumą masyvo elementų atvaizdavimui.
// Pasinaudokite inline css kodu, stilizuoti galutinį rezultatą.
