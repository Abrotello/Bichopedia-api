const { getArachnida } = require("../controller/arachnida")

const ArachnidaRouter = require("express").Router()

ArachnidaRouter.get("/", getArachnida)

module.exports = ArachnidaRouter