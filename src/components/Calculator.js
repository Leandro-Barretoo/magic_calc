import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, myState] = useState({ total: null, next: null, operation: null });

  const changeState = (e) => {
    myState({ ...state, ...calculate(state, e.target.innerText) });
  };

  return (
    <table className="TableContainer">
      <tbody>
        <tr>
          <td className="TableCell Input" colSpan="4">{state.next || (state.total || '0')}</td>
        </tr>
        <tr>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>AC</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>+/-</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>%</button></td>
          <td className="TableCell Orange"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>÷</button></td>
        </tr>
        <tr>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>7</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>8</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>9</button></td>
          <td className="TableCell Orange"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>x</button></td>
        </tr>
        <tr>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>4</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>5</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>6</button></td>
          <td className="TableCell Orange"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>-</button></td>
        </tr>
        <tr>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>1</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>2</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>3</button></td>
          <td className="TableCell Orange"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>+</button></td>
        </tr>
        <tr>
          <td className="TableCell" colSpan="2"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>0</button></td>
          <td className="TableCell"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>.</button></td>
          <td className="TableCell Orange"><button className="btn" type="button" onClick={(e) => { changeState(e); }}>=</button></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculator;
