import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/calculator')({
  component: Calculator,
});

type TOperand = 'plus' | 'minus' | 'multiply' | 'divide';

const calculate = (
  num1: number,
  num2: number,
  operand: TOperand,
): number | typeof Infinity | undefined => {
  switch (operand) {
    case 'plus':
      return num1 + num2;
    case 'minus':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) return Infinity;
      return num1;
    default:
      return undefined;
  }
};

function Calculator() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [operand, setOperand] = useState<TOperand>('plus');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<number | undefined>(undefined);

  const renderResult = () => <div>Result: {result}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Calculator</h1>
      <form>
        <label htmlFor="num1">First number: </label>
        <input
          type="number"
          onChange={(e) => {
            setNum1(Number(e.target.value));
          }}
          value={num1}
        />
        <br />

        <label htmlFor="num2">Second number: </label>
        <input
          type="number"
          onChange={(e) => {
            setNum2(Number(e.target.value));
          }}
          value={num2}
        />
        <br />

        <select
          name="operand"
          onChange={(e) => {
            setOperand(e.target.value as TOperand);
          }}
          value={operand}
        >
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiply">X</option>
          <option value="divide">/</option>
        </select>
        <br />

        <button
          type="button"
          onClick={() => {
            setResult(calculate(num1, num2, operand));
            setShowResult(result != undefined);
          }}
        >
          Calculate!
        </button>
      </form>
      {showResult ? renderResult() : null}
    </div>
  );
}
