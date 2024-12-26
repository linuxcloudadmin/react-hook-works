import { useEffect, useState } from "react";

function FirstEffect() {
  const [count, setCount] = useState(0);

// useEffect hook will run whenever the the page is rendered
  useEffect(() => {
    console.log("Component rendered");
  });

// useEffect hook will run only once
//   useEffect(() => {
//     console.log("Component mounted");
//   }, []); 

// useEffect hook will run whenever the value of [count] changes
//   useEffect(() => {
//     console.log(`Count is changing ${count}`);
//   }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FirstEffect;