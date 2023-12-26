import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook 
  const passRef = useRef(null)
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+-=[];{};.?~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() =>  {
    passGenerator()
  }, [numberAllowed, charAllowed, length, passGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
         <h1>Passsword Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 p-4">
          <input 
          type="text" 
          value={password} 
          placeholder="password" 
          readOnly 
          ref={passRef}
          />
          <button
            onClick={copyPassToClip}
            className="outline-none
          bg-blue-700 px-3 py-4 shrink-0 text-white"
          >
            cpy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={45}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>numbers</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
