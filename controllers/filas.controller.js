const mysql = require('../mysql');

exports.entrarFila = async (req, res, next) => {

    try {
        const resultados = await mysql.execute(
            `INSERT INTO filas (
                id_user,
                id_atracao,
            ) VALUES (?, ?)`,
            [
                res.locals.idUsuario,
                req.params.id_atracao,
            ]	
        )

    } catch (error) {
        return res.status(500).send({ "Mensagem": error });
    }
}