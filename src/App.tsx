import React, {useState} from 'react';
import './App.css';
import Loto from "./Loto/loto";

function App() {
    const [randomNumber, setRandomNumber] = useState<number[]>([]);

    const getRandomIntInclusive = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const changeState = () => {
      const newArray: number[] = [];
      for(let i = 0; i < 5; i++) {
          let newNumber = getRandomIntInclusive(5, 36);
          if(newArray.includes(newNumber)){
              let newNumber = getRandomIntInclusive(5, 36);
              newArray.push(newNumber);
          } else {
              newArray.push(newNumber);
          }
      }
      newArray.sort(function(a, b) {
          return a - b;
      });
      setRandomNumber(
          newArray
      )
    };

  return (
      <div className="App">

          <div>
              <button className="btn" onClick={changeState}>Change Numbers</button>
          </div>

          <Loto getNumber={randomNumber[0]}/>
          <Loto getNumber={randomNumber[1]}/>
          <Loto getNumber={randomNumber[2]}/>
          <Loto getNumber={randomNumber[3]}/>
          <Loto getNumber={randomNumber[4]}/>
      </div>
  );
}

export default App;
