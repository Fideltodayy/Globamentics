import { useMemo } from "react";
const useFeaturedHouse = (allHouses) => {
    //Usememo to remember the previous featured house once it is determined.
    const featuredHouse = useMemo(() => {
        if (allHouses.length) {
          const randomIndex = Math.floor(Math.random()* allHouses.length);
          return allHouses[randomIndex];
        }
      }, [allHouses]);
      return featuredHouse;
    
}

export default useFeaturedHouse;