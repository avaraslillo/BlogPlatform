var express = require('express');
var router = express.Router();

const {getAllEntries, getEntryByID, saveEntry, deleteEntry, updateEntry} = require('../controllers/entry');

/* GET users listing. */

router.get('/insert-entry', (req, res) => {
    res.render('entries_form');
});

router.get('/show-entries', (req, res) => {
    res.render('list_of_entries', {entries: getAllEntries()});
});

router.get('/', getAllEntries);

router.get('/:id', getEntryByID);

router.post('/', saveEntry);

router.delete('/:id', deleteEntry);

router.patch('/:id', updateEntry);



module.exports = router;