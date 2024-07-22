// import React, { useState } from "react";

// function App() {
//   // const state = React.useState();
//   const [count, setCount] = useState(0);   //setCount is name of function in the array
//   console.log(count);

//   // const [red, green, blue] = [9, 132, 227];
//   // console.log(blue);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;








import React, { useState } from "react";

export default function App() {


  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }


  return(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}