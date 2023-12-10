import React, { useState } from "react";

const RenderList = () => {
  const [list, setList] = useState([]);

  const incrementList = (e) => {
    e.preventDefault();
    const item = document.querySelector("#newItem").value;
    setList([...list, item]);
    newItem.value = "";
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form>
        <input type="text" id="newItem" />
        <button onClick={incrementList}>Adicionar à lista</button>
      </form>
    </div>
  );
};

export default RenderList;

