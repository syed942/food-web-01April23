import React, {useState,useEffect} from 'react'
import './Slider.css'
import styles from  './Slider.module.css'
import BtnSlider from './BtnSlider'
import DataSlider from './DataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== DataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === DataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(DataSlider.length)
        }
    }
   

    const moveDot = index => {
        setSlideIndex(index)
    }
    useEffect(() => {
        setTimeout(() => {
            nextSlide(slideIndex)
          
        }, 6000);
      });

    return (
        <div className="slidercontainer">
            {DataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        
                        
                    <>
                   
                    
                        <img src={obj.image} alt="ll" className={styles.image}/>
                    </>
                      
                        
                    </div>
                )
            })}
            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}