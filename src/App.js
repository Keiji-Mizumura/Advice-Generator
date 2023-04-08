import React from 'react';
import './main.css';

import { useState, useEffect } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <div className="advice">
        <div className="advice-header">
          <h3>ADVICE #{advice.id}</h3>
        </div>
        <div className="advice-content">{isLoading ? <div className='loading-spinner'><div></div></div> : <h1>“{advice.advice}”</h1>}</div>
        <div className="divider">{/* image div */}</div>
        <button className="btn" onClick={fetchAdvice}>
          <img src="/images/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </main>
  );
};

export default App;
