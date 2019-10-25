module.exports = function (app, db) {

    /* Lista usuários */

    app.post('/users', (req, res) => {
        res.send('Exibindo lista de usuários');
    });

    /* Consulta usuário no Banco */

    app.get('/users/get-users', (req, res) => {
        res.send('Buscando usuário no Banco...');
    });


    /* Cria Usuário */

    app.post('/users/new-user', (req, res) => {
        console.log(req.body);

        const user = { user: req.body.user, level: req.body.level };
        db.collection('users').insert(user, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has ocurred' });
            } else {
                res.send(result.ops[0]);
            }
        });

    });

    /* Deleta usuário */

    app.delete('/users/delete', (req, res) => {
        res.send('Usuário Deletado');
    });

};