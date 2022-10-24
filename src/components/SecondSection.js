import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { endData } from './secondSectionHelper';
import { ArrowBackIos,  ArrowForwardIos } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const SecondSection = () => {
    const PreviousBtn = (props) =>{
        return(
            <ArrowBackIos onClick={props.onClick} className="prevBtn"/>
        )
    }
    const NextBtn = (props) =>{
        return(
            <ArrowForwardIos onClick={props.onClick} className="nextBtn"/>
        )
    }

    const settings = {
        className: "slider variable-width",
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
        initialSlide:0,
        prevArrow : <PreviousBtn/>,
        nextArrow : <NextBtn/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='first_wrapper'>
    <h1 style={{marginTop:"70px"}}>Plane a trip with help from local hosts arount the world</h1>
    <div className='firstSliding_wrapper'>
        <Slider {...settings}>
            {endData.map((item)=>{
                return(
                    <div >
                        <div style={{position:"relative"}}>
                            <img src={item.imageUrl} alt='Slide' style={{height:"250px", width:"190px",position:"relative", marginRight:"15px", borderRadius:"12px"}}/>
                            <p><span><StarIcon style={{fontSize:"small"}}/></span>{item.rating}</p>
                            <div style={{maxWidth:"150px"}}>
                                <p>{item.tittle}</p>
                            </div>
                            <p><strong>From {item.price}</strong>/Person</p>
                        </div>
                    </div>
                )
            })}
        </Slider>
    </div>
</div>
  )
}

export default SecondSection