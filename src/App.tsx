import React, {useState} from 'react';
import './App.css';
import Loto from "./Loto/loto";

function App() {
    const [randomNumber, setRandomNumber] = useState<number[]>([]);

    const getRandomIntInclusive = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };


  return (
      <div className="App">
          <Loto getNumber={randomNumber[0]}/>
          <Loto getNumber={randomNumber[1]}/>
          <Loto getNumber={randomNumber[2]}/>
          <Loto getNumber={randomNumber[3]}/>
          <Loto getNumber={randomNumber[4]}/>

          <div>
              <button>Change Numbers</button>
          </div>
      </div>
  );
}

export default App;
