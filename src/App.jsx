import "./App.css";
import gato from "./imgs/katito.jpg";

function App() {
    return (
        <div className='App'>
            <h2>Katitos :3</h2>
            <img style={{ width: "100vw" }} src={gato} alt='Un katito' />
        </div>
    );
}

export default App;
