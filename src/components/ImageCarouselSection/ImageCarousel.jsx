import React, {useState} from 'react';
import './ImageCarouselSection.css';
import one from './peter_01.jpg';
import two from './peter_02.jpg';
import three from './peter_03.jpg';
import four from './peter_04.jpg';
import five from './peter_05.jpg';
import six from './peter_06.jpg';
import seven from './peter_07.jpg';

const images = [one, two, three, four, five, six, seven];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <section className={'carousel-container'}>
            <div className={'blue'}/>
            <div className={'carousel'}>
                <img src={images[currentIndex]} alt="Carousel" style={{objectFit: 'cover'}}/>
                <div onClick={handlePrev} className={'carousel-panel left'}/>
                <div onClick={handleNext} className={'carousel-panel right'}/>
            </div>
            <div className={'yellow'}/>
        </section>
    );
};

export default ImageCarousel;
