import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incValue = () => {
    setCount(count+1);
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);

  }

  const decValue = () => {
    setCount(count-1);
  }

  return (
    <>
      <h1>Hey siri! lets make a counter</h1>
      <br />
      <h2>current value - {count}</h2>
      <br />
      <button
        type="button"
        class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black m-2"
        onClick={incValue}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      <button
        type="button"
        class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={decValue}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          {/* <line x1="12" y1="5" x2="12" y2="19"></line> */}
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

     

    </>
  );
}

export default App;
