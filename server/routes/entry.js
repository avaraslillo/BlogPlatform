var express = require('express');
var router = express.Router();

const {getAllEntries, getEntryByID, saveEntry, deleteEntry, updateEntry} = require('../controllers/entry');

/* GET users listing. */

router.get('/insert-entry', (req, res) => {
    res.render('entries_form');
});

/*router.get('/', async (req, res) => {
    try {
      const allEntries = await getAllEntries(); // Llama a la función solo una vez
      console.log(allEntries); // Muestra los datos obtenido  
      // Renderiza la plantilla PUG con los datos
      res.render('list_of_entries', { entries: allEntries });
    } catch (err) {
      // Maneja el error si algo sale mal
      console.log(err);
  
      // Puedes enviar una respuesta de error al cliente si es necesario
      res.status(500).send('Error al obtener las entradas');
    }
  });*/

router.get('/', getAllEntries);  



router.get('/:id', getEntryByID);

router.post('/', saveEntry);

router.delete('/:id', deleteEntry);

router.patch('/:id/edit', updateEntry);




module.exports = router;