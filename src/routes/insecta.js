const { getInsecta } = require("../controller/insecta")

const InsectaRouter = require("express").Router()

InsectaRouter.get("/", getInsecta)

module.exports = InsectaRouter