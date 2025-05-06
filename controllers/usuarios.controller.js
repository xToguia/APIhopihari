const mysql = require('../mysql')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.atualizarUsuario = async (req, res) => {
try {
    const idUsuario = Number(req.params.id);

    const resultado = await mysql.execute(
`
        INSERT INTO users (
            first_name,
            last_name,
            email,
            password,
            birth_date,
            phone
        )
        ) VALUES (
            ?,
             ?,
              ?,
               ?
        )`
        [
            req.body.first_name, 
            req.body.last_name,
            req.body.email, 
            req.body.password, 
            req.body.birth_date,
            req.body.phone,
            idUsuario
        ]
    );
    return res.status(201).send({
        "Mensagem": "Usuário atualizado com sucesso!",
        "Resultado": resultado
    });
} catch (error) {
    return res.status(500).send({"Mensagem": error});
}
}

exports.cadastrarUsuario = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const resultado = await mysql.execute(
            `INSERT INTO users (
                first_name,
                last_name,
                email,
                password,
                birth_date,
                phone
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                req.body.first_name, 
                req.body.last_name, 
                req.body.email, 
                hash, 
                req.body.birth_date, 
                req.body.phone
            ]
        );
        return res.status(201).send({
            "Mensagem": "Usuário cadastrado com sucesso!",
            "Resultado": resultado
        });
    } catch (error) {
        return res.status(500).send({"Error": error});
    }
}

exports.login = async (req, res) => {
    try {
        const usuario = await mysql.execute(
            `SELECT * FROM users WHERE email = ?`, 
            [req.body.email]);

if (usuario.length == 0) {
    return res.status(401).send({"Mensagem": "Usuário não cadastrado!"});
}

const match = await bcrypt.compare(usuario[0].password, req.body.password);
if (!match) {
    return res.status(401).send({"Mensagem": "Senha incorreta!"});
}
const token = jwt.sign(
    {
        id: usuario[0].id,
        first_name: usuario[0].first_name,
        last_name: usuario[0].last_name,
        email: usuario[0].email,
        birth_date: usuario[0].birth_date,
        phone: usuario[0].phone
    }, "senhadojwt");
return res.status(200).send({
    "Mensagem": "Usuário autenticado com sucesso!",
    "token": token
});

} catch (error) {
    return res.status(500).send({"Error": error});
}
}