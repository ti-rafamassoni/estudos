import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Executado sempre que count é atualizado
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Example