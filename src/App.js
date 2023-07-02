import "./App.css";
import "./Calculator.css"
import { useState, useEffect } from "react"
export default function App() {
  const [result, setresult] = useState("")
  const handleclick = (e) => {
    setresult(result.concat(e.target.name))
  }
  const handleclear = () => {
    setresult("")
  }
  const hanlecancel = () => {
    setresult(result.slice(0, -1))
  }
  const finalanswer = () => {
    try {
      setresult(eval(result).toString())
    }
    catch {
      setresult("Error")
    }
  }
  const handleclickseven = (event) => {
    setresult(result.concat(event.key))
  }
  const handleKeyPress = (event) => {
    console.log(event.key)
    let num = event.key;
    if ((!(isNaN(num))) || (num == "+") || (num == "-") || (num == "*") || (num == "/") || (num=="."))
      setresult(result + event.key);
    else if (num == "Backspace")
      setresult(result.slice(0, -1))
    else if (num === "=") {
      try {
        setresult(eval(result).toString())
      }
      catch {
        setresult("Error")
      }
    }
    else if(num=="Delete")
    setresult("")
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [result]);
  return (
    // <div className="layout">
    //   <div className="header lay">Header</div>
    //   <div className="div1 lay">Main div 1</div>
    //   <div className="div2 lay">Main div 2</div>
    //   <div className="div3 lay">Main div 3</div>
    //   <div className="footer lay">Footer</div>
    // </div>
    <div className="calculator">
      <form className="display">
        <input type="text" className="result" value={result} />
      </form>
      <button name="clear" className="clear" onClick={handleclear}>Clear</button>
      <button name="cancel" className="cancel" onClick={hanlecancel}>C</button>
      <button name="/" className="divide" onClick={handleclick}>&#xf7;</button>
      <button name="7" className="seven" onClick={() => handleclickseven("7")}>7</button>
      <button name="8" className="eight" onClick={handleclick}>8</button>
      <button name="9" className="nine" onClick={handleclick}>9</button>
      <button name="*" className="mul" onClick={handleclick}>&#215;</button>
      <button name="4" className="four" onClick={handleclick}>4</button>
      <button name="5" className="five" onClick={handleclick}>5</button>
      <button name="6" className="six" onClick={handleclick}>6</button>
      <button name="-" className="minus" onClick={handleclick}>&#8722;</button>
      <button name="1" className="one" onClick={handleclick}>1</button>
      <button name="2" className="two" onClick={handleclick}>2</button>
      <button name="3" className="three" onClick={handleclick}>3</button>
      <button name="+" className="add" onClick={handleclick}>+</button>
      <button name="0" className="zero" onClick={handleclick}>0</button>
      <button name="." className="dot" onClick={handleclick}>.</button>
      <button name="=" className="equal" onClick={finalanswer}>=</button>
    </div>

  )
}