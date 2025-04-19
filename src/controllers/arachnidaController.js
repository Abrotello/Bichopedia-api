const { arachnidaSchema } = require("../schemas/arachnida")

const getArachnida = async( req, res ) => {
    res.status(200).json({clase: arachnidaSchema.tax.class})
}

module.exports = {
    getArachnida,
}