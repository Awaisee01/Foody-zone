import React, { useEffect, useState } from 'react'

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9000") 
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Main
