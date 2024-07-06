
import { useEffect, useState } from "react";
import {styled} from "styled-components";
// import SearchResult from "./components/SearchResults/SearchResult";
import FoodyZone from "./components/FoodyZone";
import logo from "../src/Foody Zone.png";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <>
     

<div className="nav">
      <Container>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder="Search Food.." />
          </div>
        </div>
      </Container>

      <Btns>
      {filterBtns.map((value) => (
            <button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </button>
          ))}
      </Btns>
    </div>
      <FoodyZone data={filteredData} />
    </>
  );
};

export default App;

const Container = styled.div`
  background-color: #323334;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .search input {
    border: 1px solid #ff0909;
    outline: none;
    background: transparent;
    color: white;
    padding: 7px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    width: 90%;
  }
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 10px; */
  gap: 30px;
  padding: 10px;

  button {
    background-color: #ff4343;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 6px;
  }
  button:hover {
    background-color: #ee2b2b;
  }
`;
