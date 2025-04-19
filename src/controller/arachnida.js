const { arachnidaSchema } = require("../schema/arachnida")

const getArachnida = async( req, res ) => {
    res.status(200).json({clase: arachnidaSchema.tax.class})
}

module.exports = {
    getArachnida,
}