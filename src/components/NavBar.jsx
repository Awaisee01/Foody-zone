import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import logo from "../Foody Zone.png";

const NavBar = () => {
  return (
    <div className="nav">
      <Container>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Food.." />
          </div>
        </div>
      </Container>

      <Btns>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </Btns>
    </div>
  );
};

export default NavBar;

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
