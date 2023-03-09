import './App.css';
import {DescriptionSection} from "./components/DescriptionSection/DescriptionSection";
import {Divider} from "./components/UI/Divider";

function App() {
  return (
    <div>
        <Divider color={'#efc61e'}/>
      <DescriptionSection/>
        <Divider color={'#1d5eaf'}/>
    </div>
  );
}

export default App;
