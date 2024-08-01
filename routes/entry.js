var express = require('express');
var router = express.Router();

const {getAllEntries, getEntryByID, saveEntry, deleteEntry, updateEntry} = require('../controllers/entry');

/* GET users listing. */

router.get('/insert-entry', (req, res) => {
    res.render('entries_form');
});

router.get('/', async (req, res) => {
    try {
      // Supongo que `getAllEntries` es una función que devuelve una promesa
      const allEntries = await getAllEntries(); // Llama a la función solo una vez
      console.log(allEntries); // Muestra los datos obtenidos
  
      // Renderiza la plantilla PUG con los datos
      res.render('list_of_entries', { entries: allEntries });
    } catch (err) {
      // Maneja el error si algo sale mal
      console.log(err);
  
      // Puedes enviar una respuesta de error al cliente si es necesario
      res.status(500).send('Error al obtener las entradas');
    }
  });



router.get('/:id', getEntryByID);

router.post('/', saveEntry);

router.delete('/:id', deleteEntry);

router.patch('/:id', updateEntry);




module.exports = router;