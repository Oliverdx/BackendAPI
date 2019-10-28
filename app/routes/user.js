module.exports = function (app, db) {

    let usersCollection = db.collection('users');

    app.route('/users').get((req, res) => {
        usersCollection.find({}).toArray((err, result) => {
            if (err)
                throw err;
            res.json(result);
        });

    }).post((req, res) => {
        const user = {
            user: req.body.user.toLowerCase(),
            name: req.body.name,
            level: req.body.level.toLowerCase()
        };

        usersCollection.insert(user, (err, sucess) => {

            if (err)
                res.send(`Error when trying to insert user in DB ${err}`);

            res.send('User inserted sucessfully');
        });


    });

    /* Busca usuário pelo username */

    app.route('/users/:username').get((req, res, next) => {
        const username = req.params.username ? req.params.username : null;

        if (!username)
            return res.send('Invalid username');

        usersCollection.find({ user: username }).toArray((err, result) => {
            if (err)
                throw err;
            res.json(result);
        });
    }).put((req, res) => {
        const username = req.params.username ? req.params.username : null;
        const data = req.body;

        try {
            usersCollection.updateOne({ user: username }, { $set: data }).then(data => {
                if (data.modifiedCount > 0)
                    return res.send('Usuário atualizado com sucesso');

                res.send('Usuário não encontrado')
            });
        } catch (err) {
            return res.send('Erro ao atualizar o usuário');
        }
    }).delete((req, res) => {
        const username = req.params.username ? req.params.username : null;

        if (!username)
            res.send('Invalid username');

        usersCollection.removeOne({ user: username }, (err, result) => {
            if (err)
                return res.send(err);

            if (result.deletedCount > 0)
                return res.send(`User ${username} deleted sucessfully`);

            res.send(`User not found`);
        });
    });

};