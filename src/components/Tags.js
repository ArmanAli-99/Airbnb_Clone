import React from 'react'
import { tagList } from './tagsHelper'
import './tags.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Tags = () => {

    const settings = {
        className: "slider variable-width",
        infinite: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
        variableWidth: true,
        initialSlide:0,
      };
  return (
    <div className='tags_wrapper'>
        <div className='left_tags_wrapper'>
            <button className='leftBtn'>Dates</button>
            <button className='leftBtn'>More Filter</button>
            <button className='leftBtn'>Groups Size</button>
        </div>
        <div className='right_tags_wrapper'>
            <Slider {...settings}>
                    {tagList.map((item)=>{
                        return(
                            <div style={{marginRight:"15px!important"}}>
                            <button className='rightBtn'>{item}</button>
                            </div>
                        )
                    })}
            </Slider>
        </div>
        {/* <a aria-label="Craft a custom trip to Korea with Jay" class="l4a2xp4 dir dir-ltr" data-check-info-section="true" href="/experiences/2563542?currentTab=experience_tab&amp;federatedSearchId=0902a9a5-1024-4d37-a2aa-bf96fe6b665b&amp;searchId=c89d1dc9-e7dc-46b1-bcc0-61fccf3ca2ed&amp;sectionId=3b4f7ad1-11b2-4304-95e5-62619763657e&amp;source=p2" rel="noopener noreferrer nofollow" target="_blank"></a> */}
        
    </div>
  )
}

export default Tags