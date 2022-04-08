import { RecoilRoot } from "recoil";
import "./assets/css/App.css";
import SelectorWithContext from "./components/SelectorWithContext";
import SelectorWithCustomHook from "./components/SelectorWithCustomHook";
import SelectorWithRecoil from "./components/SelectorWithRecoil";

function App() {
  return (
    <div className="App">
      <SelectorWithCustomHook />
      <hr />
      <SelectorWithContext />
      <hr />
      <RecoilRoot>
        <SelectorWithRecoil />
      </RecoilRoot>
    </div>
  );
}

export default App;
