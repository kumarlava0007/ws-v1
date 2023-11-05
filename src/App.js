

import FirstComponent from "./components/first/FirstComponent";
import FooterComponent from "./components/footer/FooterComponent";
import SecondComponent from "./components/second/SecondComponent";
import ThirdComponent from "./components/third/ThirdComponent";
import './styles/global/global.css'

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
