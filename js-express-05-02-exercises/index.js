import express from 'express'
import { create } from 'express-handlebars';
import { faker } from '@faker-js/faker';

//Express objekto inicijavimas
const app = express()
const hbs = create({ /* config */ });
const address = faker.address.city()
const car = faker.vehicle.vehicle()
const name = faker.name.firstName()
const photo = faker.image.avatar()
const phone = faker.phone.phoneNumber()
const workPlace = faker.company.companyName()

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', (req, res) => {
    let variables = {
        name: name,
        address: address,
        car: car,
        photo: photo,
        phone: phone,
        workPlace: workPlace
    }
    res.render('card', variables)
})



app.listen(3000)