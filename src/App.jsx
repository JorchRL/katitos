import "./app.scss";
import gato from "./imgs/katito.jpg";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='app'>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default App;
