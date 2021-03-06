import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(import.meta)
const credentials = {
    login: 'user1',
    password: '123456'
}
const credentials2 = {
    name: 'user1',
    surname: 'user',
    address: 'hall ave 9',
    tel: '+37061620554',
    email: 'one@two.com',
}

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.sendFile(__dirname + '/templates/form.html')
});
app.get("/query-submition", (req, res) => {
  //   res.status(404)
  //   res.send("<form><input /></form>")
  res.sendFile(__dirname + "/templates/form.html");
});
// app.get("/personal", (req, res) => {
//   //   res.status(404)
//   //   res.send("<form><input /></form>")
//   res.sendFile(__dirname + "/templates/form2.html");
// });
// app.get("/login-submit", (req, res) => {
//   res.json("Based in Kaunas");
// });
app.get("/login-submit", (req, res) => {
  if (parseInt(Object.keys(req.query).length) > 0) {
    if (
      req.query.login != "" &&
      req.query.password != "" &&
      req.query.login === credentials.login &&
      req.query.password != credentials.password
      ) {
        res.redirect('http://localhost:3000/clients')
      } else {
        res.send('Neteisingi prisijungimo duomenys')
      }
  } else {
    res.redirect('http://localhost:3000/') //Peradresavimas
  }
})

app.get('/clients', (req, res) => {
  //let database 

  // let html = '<table>'
  //   database.forEach(value => {
  //     html += '<tr>'
  //     html += '<td></td>'
  //     html += '<td></td>'
  //     html += '<td></td>'
  //     html += '<td></td>'
  //     html += '<td></td>'
  //     html += '</tr>'
  //   })
  // html += '</table>'
  res.send('Klientai') 
})

app.get("/work/:getThis", (req, res) => {
  res.send("Working in UTENA");
  console.log(req.params.getThis);
});

app.listen(3000);
