const { getInsecta } = require("../controllers/insectaController")

const InsectaRouter = require("express").Router()

InsectaRouter.get("/", getInsecta)

module.exports = InsectaRouter