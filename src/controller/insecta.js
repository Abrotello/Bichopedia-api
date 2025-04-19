const { insectaSchema } = require("../schema/insecta")

const getInsecta = async( req, res ) => {
    res.status(200).json({clase: insectaSchema.tax.class})
}

module.exports ={
    getInsecta,
}