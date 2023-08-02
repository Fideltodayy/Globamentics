import React from 'react'
import House from '../house';
const FeaturedHouse = ({house}) => {
    if(house){
        return(
            <div>
                <div className=' row featuredHouse'>
                    <h3 className='col-md-12 text-center'>Featured House</h3>
                </div>
                <House house={house}/>
            </div>
        );
    }

  return (
    <div>No Featred house at this time</div>
  )
}

export default FeaturedHouse