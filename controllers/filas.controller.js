const mysql = require('../mysql');


exports.verificarBrinquedo = async (req, res, next) => {
    try{
        const resultado = await mysql.execute(
            `SELECT * FROM atracoes WHERE id = ?`,
            [
                req.params.idAtracao
            ]
        );
        if (resultado.length == 0) {
            return res.status(404).send({"Mensagem": "Brinquedo não encontrado"});
    } next();
    } catch (error) {
        return res.status(500).send(error);
    }
}
exports.entrarFila = async (req, res, next) => {

    try {
        const resultados = await mysql.execute(
            `INSERT INTO hopi_hari_db.line (
                id_user,
                id_atracao
            ) VALUES (?, ?)`,
            [
                res.locals.idUsuario,
                req.params.id_atracao
            ]	
        );
return res.status(201).send({"Mensagem": resultados});
    } catch (error) {
        return res.status(500).send(error);
    }
}