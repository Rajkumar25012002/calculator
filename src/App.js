
import './App.css';
import {useState} from 'react'
import Data from './data'
function Calculator() {
  const [value , setValue] = useState("");

const handleClick = (e) => {
  let string = value;
  setValue(string+e.target.value);
}

const evaluateStr = () => {
  let result = eval(value);
  let c=JSON.stringify(result);
  setValue(c);
}
const erase=()=>{
  let b=value.slice(0,-1);
  setValue(b);
}
const eraseall=()=>{
  let a="";
  setValue(a);
}

  

  return (
    <div className='py-20 sm:px-40 md:px-60 xl:px-80'>
      <h2 className='text-3xl font-serif text-center'>Calcultor</h2>
      <div className=''>
        <div className='grid grid-cols-1'>
          <input className='bg-slate-200 py-4 text-left' type="int" value={value} ></input>
       </div>
      <div className='grid grid-cols-4 grid-rows-4'>
        <button className=' bg-sky-400 hover:bg-sky-600 py-3' value={1} onClick={e => handleClick(e)}>1</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={2} onClick={e => handleClick(e)}>2</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={3} onClick={e => handleClick(e)}>3</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="/" onClick={e => handleClick(e)}>/</button> 
        <button className=' bg-sky-400 hover:bg-sky-600' value={4} onClick={e => handleClick(e)}>4</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={5} onClick={e => handleClick(e)}>5</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={6} onClick={e => handleClick(e)}>6</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="*" onClick={e => handleClick(e)}>*</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={7} onClick={e => handleClick(e)}>7</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={8} onClick={e => handleClick(e)}>8</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={9} onClick={e => handleClick(e)}>9</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="+" onClick={e => handleClick(e)}>+</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="." onClick={e => handleClick(e)}>.</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value={0} onClick={e => handleClick(e)}>0</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="=" onClick={evaluateStr}>=</button>
        <button className=' bg-sky-400 hover:bg-sky-600' value="-" onClick={e => handleClick(e)}>-</button>
      </div>
      <div className='grid grid-cols-2'>
      <button className='bg-red-400 hover:bg-red-600 px-8 py-3'  onClick={eraseall}>CLR</button>
      <button className='bg-red-400 hover:bg-red-600 px-9 py-3'  onClick={erase}>DEL</button>
      </div>
      </div>
    </div>
  );
}

export default Calculator;
