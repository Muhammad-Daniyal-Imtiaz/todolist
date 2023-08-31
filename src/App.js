import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [n, setN] = useState([
    { name: 'hadi', age: 23, status: 'React-js Developer' },
    { name: 'Python-Developer', age: 20, status: 'Gatsby-js Developer' },
    { name: 'hadi', age: 24, status: 'Next-js Developer' }
  ]);

  function Add(e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page

    if (name !== '') {
      const newData = { name: name, age: null, status: '' };
      setN([...n, newData]);
      setName('');
    }
  }

  return (
    <div>
      {/* <center> */}
        <h id='hea'><strong>To do list</strong></h>
      {/* </center> */}
      <div>
        <center>
          <form>
            <input id='i1'
              type="text"
              placeholder="Enter the text"
              value={name}

              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={Add}>ADD</button>
          </form>
        </center>
      </div>

      <center>
        {n.map((x, index) => (
          <div key={index}>
            <h1>
              {x.name} {x.age} {x.status}
            </h1>
            <hr />
          </div>
        ))}
      </center>
    </div>
  );
}

export default App;
