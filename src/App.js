import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>Mudara Manaruchira <br />
      </h2>
      <p>
        <span className='bold'>Simple Counter</span>
      </p>
      <button className='button-plus'
        onClick={() => {setCount(count + 1)}
      }>
        +
      </button>
      <h1>{count}</h1>
      <button className='button-minus'
        onClick={ () => {
          if (count > 0) {
            setCount(count - 1)
          }
          else{
            alert("Counter could not be Negative!")
          }
        }}>
        -
      </button>
    </div>
  );
}

export default App;