import React from 'react'
import { useNavigate } from "react-router-dom";

const HouseFilter = ({allHouses}) => {
    const navigate = useNavigate();
    const countries = allHouses 
    ? Array.from(new Set(allHouses.map((h)=> h.country)))
    : [];
    countries.unshift(null);
    console.log(countries);

    const onSearchChange = (e) => {
        const country = e.target.value;
        navigate(`/searchresults/${country}`);

    }
  return (
    <div className='row mt-3'>
        <div className='offset-md-2 col-md-4'>
            Filter by country:
        </div>
        <div className='col-md-4 mb-3'>
            <select onChange={onSearchChange} className='form-select' >
                {countries.map((c)=> (
                    <option key={c} value={c}>  
                        <span>{c}</span>
    
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default HouseFilter