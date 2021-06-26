const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    // insert new todo
    router.post('/todos', (req, res, next) => {
        db.query(
            'INSERT INTO todo (id,name) VALUES (?)',
            [req.body.name, req.body.id],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    // get a list of all todos
    router.get('/todos', function (req, res, next) {
        db.query(
            'SELECT id, name FROM todo',
            [],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    // get a single todo
    router.get('/todos/:id', function (req, res, next) {
        db.query(
            'SELECT id, name FROM todo WHERE id=?',
            [req.params.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });


    // update single todo (id)
    router.put('/todos/:id', function (req, res, next) {
        db.query(
            'UPDATE todo SET name=? WHERE id=?',
            [req.body.name, req.params.id],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    // delete single todo (id)
    router.delete('/todos/:id', function (req, res, next) {
        db.query(
            'DELETE FROM todo WHERE id=?',
            [req.params.id],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;