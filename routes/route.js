const express = require("express")
const router = express.Router()

const {
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks,
}=require("../controller/controller")

router.use(express.json())

router.get('/',getTasks)

router.post('/',createTasks)

router.put('/:id',updateTasks)

router.delete('/:id',deleteTasks)

module.exports={router}