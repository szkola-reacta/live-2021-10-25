import { useState, useRef } from 'react';

function Hello({ condition }) {
  // const [name, setName] = useState(() => {
  //   return window.localStorage.getItem("name") || ""
  // });
  const [name, setName] = useState(window.localStorage.getItem("name") || "");
  const emailFieldRef = useRef(null);
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const hanleEmailChange = () => {
    const elem = emailFieldRef.current;
    if (elem) {
      const isValid = elem.value.includes('@');
      if (!isValid) {
        // elem.value
        elem.style.borderColor = '#f00';
        elem.style.color = '#f00';
      } else {
        elem.style.borderColor = '#000';
        elem.style.color = '#000';
      }
    }
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
        <input
          ref={emailFieldRef}
          id="email321"
          type="email"
          onChange={hanleEmailChange}
        />
      </div>
    </div>
  );
}

export { Hello }