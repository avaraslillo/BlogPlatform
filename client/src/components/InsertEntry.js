import React from 'react';
import { Col } from 'react-bootstrap';




function InsertEntry() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const entry = Object.fromEntries(formData.entries());

    fetch('/entries', {
      method: 'POST',
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
      <h1>Ingrese una nueva entrada</h1>
      <form onSubmit={handleSubmit}>
        <Col>
        <label htmlFor="headline">Título:</label>
        <input type="text" id="headline" name="headline" />
        </Col>
        <Col>
        <label htmlFor="country">País:</label>
        <input type="text" id="country" name="country" />
        </Col>
        <Col>
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" />
        </Col>
        <Col>
        <label htmlFor="body">Cuerpo:</label>
        <textarea id="body" name="body"></textarea>
        </Col>
        <Col>
        <label htmlFor="author">Autor:</label>
        <input type="text" id="author" name="author" />
        </Col>
        <Col>
        <button type="submit">Enviar</button>
        </Col>






      </form>
    </div>
  );
}

export default InsertEntry;