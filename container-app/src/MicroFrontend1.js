import React, { useState, useEffect } from 'react';

const MicroFrontend1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h2>Microfrontend 1</h2>
      {error ? <p>Error: {error}</p> : (data ? <p>{JSON.stringify(data)}</p> : <p>Cargando datos...</p>)}
    </div>
  );
}

export default MicroFrontend1;
