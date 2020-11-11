
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basic Calculator</h1>
      <form>
        <input type="text" id="result" readOnly />
        <input type="text" id="num" placeholder="Enter a Number" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
