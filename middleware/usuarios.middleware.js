const jwt = require('jsonwebtoken');

exports.required = (req, res, next) => {
    try {
        res.locals.idUsuario = 0;

        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.decode(token, "senhadojwt");

        if (decode.id) {
            res.locals.idUsuario = id;
            next();
        } else {
            return res.status(401).send({ mensagem: 'Falha na autenticação' });
        }
    } catch (error) {
        return res.status(500).send({"error": error });
    }
}