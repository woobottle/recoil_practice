import { RecoilRoot } from "recoil";
import "./assets/css/App.css";
import SelectorWithContext from "./components/SelectorWithContext";
import SelectorWithCustomHook from "./components/SelectorWithCustomHook";
import SelectorWithRecoil from "./components/SelectorWithRecoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <SelectorWithCustomHook />
        <hr />
        <SelectorWithContext />
        <hr />
        <SelectorWithRecoil />
      </RecoilRoot>
    </div>
  );
}

export default App;
