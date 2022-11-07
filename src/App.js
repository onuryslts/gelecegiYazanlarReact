//import Colors from "./components/Colors";

//import Form from "./components/Form";

//import User from "./components/User";

import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {/* <Form/> */}
      {/* <Colors/>  */}
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
      {/* <User/> */}
    </div>
  );
}

export default App;
