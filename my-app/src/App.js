
import { useState } from "react";

function App() {
   const [show,setShow] = useState(true);  
  

  return (
    <div>
       {show ? (<h3>
         Hide
       </h3>)
       : (
         <h2>Show</h2>
       )}

       <button onClick={()=> setShow(!show)}>{show ? "hide":"show"}</button>
    </div>
  );
}

export default App;


// Conditional rending works here..
// Ternary operators works here..