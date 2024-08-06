import React from 'react';

const MicroFrontend2 = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Microfrontend 2</h2>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default MicroFrontend2;