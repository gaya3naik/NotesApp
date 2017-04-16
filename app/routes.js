var note = require('./models/note');

function getNotes(res) {
    note.find(function (err, notes) {
        if (err) {
            res.send(err);
        }
        res.json(notes);
    });
};

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        getNotes(res);
    });
    /*
     * Create a note
     */
    app.post('/api/notes', function (req, res) {
        note.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
            getNotes(res);
        });

    });
    /*
     * Delete a note
     */
    app.delete('/api/notes/:note_id', function (req, res) {
        note.remove({
            _id: req.params.note_id
        }, function (err, note) {
            if (err)
                res.send(err);
            getNotes(res);
        });
    });
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
