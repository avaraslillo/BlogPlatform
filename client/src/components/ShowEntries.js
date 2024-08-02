
import { React, useEffect, useState } from 'react';

function ShowEntries() {
  const [entries, setEntries] = useState([]); // Cambiado de null a [] para evitar errores al mapear
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('entries'); // Asegúrate de que la URL sea la correcta
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Manejo de errores HTTP
        }
        const data = await response.json();
        if(data.data.entries.length === 0) {
          throw new Error('No entries found');
        }
        
        setEntries(data.data.entries);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>; // Indicador de carga
  if (error) return <div>Error: {error.message}</div>; // Muestra el error si ocurre

  return (
    <div className='container'>
        <h1>Bitácora de viajes</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>País</th>
              <th>Ciudad</th>
              <th>Descripcion</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id}>
                <td>{entry.headline}</td>
                <td>{entry.country}</td>
                <td>{entry.city}</td>
                <td>{entry.body}</td>
                <td>{entry.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default ShowEntries;