import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <CalculateTip />
    </div>
  );
}

function CalculateTip() {
  const [bill, setBill] = React.useState(0);
  const [percentage1, setPercentage1] = React.useState(0);
  const [percentage2, setPercentage2] = React.useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <TipPercentageSelector percentage={percentage1} onChange={setPercentage1}>
        How dissatisfied are you with the service?
      </TipPercentageSelector>
      <TipPercentageSelector percentage={percentage2} onChange={setPercentage2}>
        {" "}
        How dissatisfied is your friend with the service?
      </TipPercentageSelector>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill Amount</label>
      <input
        type="number"
        id="bill"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function TipPercentageSelector({ children, percentage, onChange }) {
  return (
    <div className="tip-percentage-selector">
      <label htmlFor="tip">{children}</label>
      <select
        id="tip"
        value={percentage}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="5">Dissatisfied (5%)</option>
        <option value="10">Neutral (10%)</option>
        <option value="15">Satisfied (15%)</option>
        <option value="20">Very Satisfied (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output">
      <h2>
        You pay ${bill + tip} (${bill} + ${tip})
      </h2>
    </div>
  );
}

function ResetButton({ onReset }) {
  return (
    <div className="reset-button">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
