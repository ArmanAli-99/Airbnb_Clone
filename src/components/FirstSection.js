import React from 'react'
import './firstSection.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {info} from './firstHelper'
import { ArrowBackIos,  ArrowForwardIos } from '@mui/icons-material';
const FirstSection = () => {
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
    console.log(info)
    const settings = {
        className: "slider variable-width",
        infinite: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
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
        <h1>New this week</h1>
        <div className='firstSliding_wrapper'>
            <Slider {...settings}>
                {info.map((item)=>{
                    return(
                        <div >
                            <div style={{position:"relative"}}>
                                <img src={item.imgageUrl} alt='Slide' style={{height:"320px",position:"relative", marginRight:"15px", borderRadius:"12px"}}/>
                                <small style={{ position:"absolute",top:"25px",left:"25px",color:"white"}}>collection</small>
                                <h2 style={{position:"absolute", top:"25px", left:"25px",color:"white" }}>{item.heading}</h2>
                                <button style={{position:"absolute" , bottom:"25px", left:"25px",padding:"10px 14px", background:"white", border:"none",borderRadius:"12px", fontSize:"16px"}}>show all</button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default FirstSection