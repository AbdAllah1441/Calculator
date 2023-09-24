import { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult(result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult(result - Number(inputRef.current.value));
    };

    function times(e) {
        e.preventDefault();
        setResult(result * inputRef.current.value);
    };

    function divide(e) {
        e.preventDefault();
        setResult(result / inputRef.current.value);
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = 0;
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };

    return (
        <div className="container">
            <div className="App">
                <div>
                    <h1>Simplest Calculator</h1>
                </div>
                <form>
                    <div className="field">
                        <label>Result</label>
                        <h2 ref={resultRef}>
                            {result}
                        </h2>
                    </div>
                    <div className="field">
                        <label>Input</label>
                        <input className="in"
                            pattern="[0-9]"
                            ref={inputRef}
                            type="number"
                            placeholder="Type a number"
                        />
                    </div>
                    <div className="btns">
                        <button onClick={plus}>add</button>
                        <button onClick={minus}>subtract</button>
                        <button onClick={times}>multiply</button>
                        <button onClick={divide}>divide</button>
                        <button onClick={resetInput}>resetInput</button>
                        <button onClick={resetResult}>resetResult</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;

