// MVC - 
// Model - sekcija atsakinga uz duomenis ir administravima
// View - Grazintas html kodas
// Controller - Routerio administratorius

import {database} from "./db/connection.js";
import {insert, getAll} from './services/tasks.js'

await insert({task: 'Go to work', done: 0})

console.log(await getAll())