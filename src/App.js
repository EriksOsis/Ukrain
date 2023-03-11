import './App.css';
import {DescriptionSection} from "./components/DescriptionSection/DescriptionSection";
import {Divider} from "./components/UI/Divider";
import {TeamSection} from "./components/TeamSection/TeamSection";
import {ProjectSection} from "./components/ProjectSection/ProjectSection";
import {ExperienceSection} from "./components/ExperienceSection/ExperienceSection";

function App() {
    return (
        <div>
            <Divider color={'#efc61e'}/>
            <DescriptionSection/>
            <Divider color={'#1d5eaf'}/>
            <ProjectSection/>
            <Divider color={'#efc61e'}/>
            <ExperienceSection/>
            <Divider color={'#1d5eaf'}/>
            <TeamSection/>
        </div>
    );
}

export default App;
