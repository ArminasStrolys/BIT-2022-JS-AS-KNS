import { database } from "../connection";

export const getAll = async () => {
    return await database.Tasks.findAll() // SELECT * FROM tasks
}

export const getById = async(id) => {
    return await database.Tasks.findByPk(id)
}

const insert = (data) => {
    const task = new database.Tasks(data)

    await task.save()
}