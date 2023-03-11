import './App.css';
import {DescriptionSection} from "./components/DescriptionSection/DescriptionSection";
import {Divider} from "./components/UI/Divider";
import {TeamSection} from "./components/TeamSection/TeamSection";
import {ProjectSection} from "./components/ProjectSection/ProjectSection";
import {ExperienceSection} from "./components/ExperienceSection/ExperienceSection";
import ImageCarousel from "./components/ImageCarouselSection/ImageCarousel";

function App() {
    return (
        <div>
            <Divider color={'#1d5eaf'}/>
            <DescriptionSection/>
            <Divider color={'#efc61e'}/>
            <ProjectSection/>
            <Divider color={'#1d5eaf'}/>
            <ExperienceSection/>
            <ImageCarousel/>
            <TeamSection/>
        </div>
    );
}

export default App;
