import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../bg.png";
const FoodyZone = ({ data }) => {
  return (
    <>
      <Body>
        <div className="cards">
          {data?.map((item) => (
            <div className="card" key={item.name}>
              <div className="imge">
                <img
                  src={`http://localhost:9000${item.image}`}
                  alt={item.name}
                />
              </div>

              <div className="content">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
                <button>Price: ${item.price}</button>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
};

export default FoodyZone;

const Body = styled.div`
  background-image: url(${bg});
  background-size: cover;
  min-height: calc(100vh - 195px);
  background-color: #323334;
  .card {
    width: 340px;
    height: 167px;
    border: 0.66px solid;

    border-image-source: radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      ),
      radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      );

    background: url(.png),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
      );
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);

    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin-top: 20px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  button {
    background-color: #ff4343;
    border: none;
    padding: 8px;
    color: white;
    border-radius: 6px;
  }
  button:hover {
    background-color: #ee2b2b;
  }
`;
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
