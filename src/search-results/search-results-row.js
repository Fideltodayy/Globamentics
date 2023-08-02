import { useNavigate } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ house }) => {
  const navigate = useNavigate();

  const setActive = () => {
    navigate(`/house/${house.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
