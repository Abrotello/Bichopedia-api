const { getArachnida } = require("../controllers/arachnidaController")

const ArachnidaRouter = require("express").Router()

ArachnidaRouter.get("/", getArachnida)

module.exports = ArachnidaRouter