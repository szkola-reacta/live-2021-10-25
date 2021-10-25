import { useState } from 'react';

function Hello({ condition }) {
  // const [name, setName] = useState(() => {
  //   return window.localStorage.getItem("name") || ""
  // });
  const [name, setName] = useState(window.localStorage.getItem("name") || "");
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  if (condition === 2) {
    return <p>Not found</p>
  }

  return (
    <div>
      <pre>Name: {name}</pre>
      <div>
        <label htmlFor="text123">Name</label>
        <input
          id="text123"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email321">E-mail</label>
        <input id="email321" type="email" />
      </div>
    </div>
  );
}

export { Hello }