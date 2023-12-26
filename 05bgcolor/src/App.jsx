import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-lg">
            <button
            onClick={() => setColor('red')}
            className="outline-none px-2 py-2 rounded-full"
            style={{backgroundColor: "red"}}>
              red
            </button>
            <button
            onClick={() => setColor('green')}
            className="outline-none px-2 py-2 rounded-full"
            style={{backgroundColor: "green"}}>
              green
            </button>
            <button
            onClick={() => setColor('yellow')}
            className="outline-none px-2 py-2 rounded-full"
            style={{backgroundColor: "yellow"}}>
              yellow
            </button>
            <button
            onClick={() => setColor('lavender')}
            className="outline-none px-2 py-2 rounded-full"
            style={{backgroundColor: "lavender"}}>
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
