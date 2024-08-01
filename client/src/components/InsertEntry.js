import React from 'react';
import { Col } from 'react-bootstrap';


function InsertEntry() {
  return (
    <div>
      <h1>Ingrese una nueva entrada</h1>
      <form action="/entries" method="POST">
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