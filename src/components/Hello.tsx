import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
 }

export interface DispatchProps {
  onDecrement?: () => object;
  onIncrement?: () => object;
}

export class Hello extends React.Component<Props & DispatchProps, object> {
  render() {
    const {enthusiasmLevel = 1} = this.props;  
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
        Hello {this.props.name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.props.onDecrement}>-</button>
          <button onClick={this.props.onIncrement}>+</button>      
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
