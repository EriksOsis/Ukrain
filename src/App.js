import './App.css';
import {DescriptionSection} from "./components/DescriptionSection/DescriptionSection";
import {Divider} from "./components/UI/Divider";
import {TeamSection} from "./components/TeamSection/TeamSection";
import {ProjectSection} from "./components/ProjectSection/ProjectSection";

function App() {
    return (
        <div>
            <Divider color={'#efc61e'}/>
            <DescriptionSection/>
            <Divider color={'#1d5eaf'}/>
            <ProjectSection/>
            <Divider color={'#efc61e'}/>
            <TeamSection/>
            <Divider color={'#1d5eaf'}/>
        </div>
    );
}

export default App;
