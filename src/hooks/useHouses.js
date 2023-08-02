import { useState,useEffect } from "react";

const useHouses = () => {
    const [allHouses, setallHouses] = useState([])
    useEffect(() => {
      const fetchHouses = async () => {
        const resp = await fetch("/houses.json");
        const houses = await resp.json();
        setallHouses(houses);
      };
      //fetch data on component mount
      fetchHouses();
      console.log("Fetching House Data...");
    }, []); 
    return allHouses;
}

export default useHouses