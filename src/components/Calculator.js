import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { next, total } = this.state;
    return (
      <table className="TableContainer">
        <tbody>
          <tr>
            <td className="TableCell Input" colSpan="4">{next || (total || '0')}</td>
          </tr>
          <tr>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>AC</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>+/-</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>%</button></td>
            <td className="TableCell Orange"><button className="btn" type="button" onClick={this.handler}>÷</button></td>
          </tr>
          <tr>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>7</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>8</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>9</button></td>
            <td className="TableCell Orange"><button className="btn" type="button" onClick={this.handler}>x</button></td>
          </tr>
          <tr>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>4</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>5</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>6</button></td>
            <td className="TableCell Orange"><button className="btn" type="button" onClick={this.handler}>-</button></td>
          </tr>
          <tr>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>1</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>2</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>3</button></td>
            <td className="TableCell Orange"><button className="btn" type="button" onClick={this.handler}>+</button></td>
          </tr>
          <tr>
            <td className="TableCell" colSpan="2"><button className="btn" type="button" onClick={this.handler}>0</button></td>
            <td className="TableCell"><button className="btn" type="button" onClick={this.handler}>.</button></td>
            <td className="TableCell Orange"><button className="btn" type="button" onClick={this.handler}>=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
