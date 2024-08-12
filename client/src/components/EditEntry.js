import { React, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';




function EditEntry() {
  const { entryId } = useParams(); // Obtener el ID de la entrada desde la URL
  //const history = useHistory(); // Para redirigir después de la actualización
  // Estado para almacenar los datos de la entrada
  const [entryData, setEntryData] = useState({
    headline: '',
    country: '',
    city: '',
    body: '',
    author: '',
  });

  // Efecto para cargar los datos de la entrada al montar el componente
  useEffect(() => {
    fetch(`/entries/${entryId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch entry');
        }
      })
      .then((data) => {
        setEntryData(data.data.entry); // Actualizar el estado con los datos de la entrada
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [entryId]); // Dependencia en entryId para cargar cuando cambie

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntryData((prevData) => ({
      ...prevData,
      [name]: value, // Actualizar el campo correspondiente
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const entry = Object.fromEntries(formData.entries());

    fetch(`/entries/${entryId}/edit`, {
      method: 'PATCH',
      credentials: 'same-origin',
      mode: 'cors',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),

    })
      .then((response) => {
        if (response.ok) {
          // Redirect the user to the new entry page
          window.location.href = '/';
        } else {
          // Handle the error response
          console.error('Failed to create entry:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  
  return (
    <div>
      <h1>Edite la entrada</h1>
      <form onSubmit={handleSubmit}>
        <Col>
        <label htmlFor="headline">Título:</label>
        <input type="text" id="headline" name="headline" value={entryData.headline} onChange={handleChange} />
        </Col>
        <Col>
        <label htmlFor="country">País:</label>
        <input type="text" id="country" name="country" value={entryData.country} onChange={handleChange} />
        </Col>
        <Col>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" value={entryData.city} onChange={handleChange} />
        </Col>
        <Col>
        <label htmlFor="body">Cuerpo:</label>
        <textarea id="body" name="body" value={entryData.body} onChange={handleChange}></textarea>
        </Col>
        <Col>
        <label htmlFor="author">Autor:</label>
        <input type="text" id="author" name="author" value={entryData.author} onChange={handleChange}/>
        </Col>
        <Col>
        <button type="submit">Guardar Cambios</button>
        </Col>






      </form>
    </div>
  );
}

export default EditEntry;