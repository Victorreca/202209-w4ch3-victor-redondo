import Display from "../components/Display/Display";
import Keyboard from "../components/Keyboard/Keyboard";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <Display />
          <a href="index.html" className="call">
            Call
          </a>
          <a href="index.html" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
