const mysql = require('../mysql');

exports.cadastrarBrinquedos = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(`
            INSERT INTO atracoes (nome, tempo_espera, status, area)
            VALUES (?, ?, ?, ?)`,[
            req.body.nome,
            req.body.tempo_espera,
            req.body.status,
            req.body.area,

            ]);
    } catch (error) {
        res.status(500).send(error);
    }
}
