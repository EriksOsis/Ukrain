import './App.css';
import {DescriptionSection} from "./components/DescriptionSection/DescriptionSection";
import {Divider} from "./components/UI/Divider";
import {TeamSection} from "./components/TeamSection/TeamSection";
import {ProjectSection} from "./components/ProjectSection/ProjectSection";
import {ExperienceSection} from "./components/ExperienceSection/ExperienceSection";
import ImageCarousel from "./components/ImageCarouselSection/ImageCarousel";
import {TopMenu} from "./components/TopMenu/TopMenu";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <TopMenu/>
            <Divider color={'#1d5eaf'}/>
            <DescriptionSection/>
            <Divider color={'#efc61e'}/>
            <ProjectSection/>
            <Divider color={'#1d5eaf'}/>
            <ExperienceSection/>
            <ImageCarousel/>
            <TeamSection/>
            <Divider color={'#efc61e'}/>
            <Footer/>
        </div>
    );
}

export default App;
