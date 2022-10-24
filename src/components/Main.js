import React from 'react'

import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Tags from './Tags';
const Main = () => {
  return (
    <div className='main_container'>
      <FirstSection/>
      <Tags/>
      <SecondSection/>
    </div>
  )
}

export default Main