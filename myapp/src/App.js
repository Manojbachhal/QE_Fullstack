import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        // console.log("Data fetched successfully");
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
    >
      {state.map((ele) => (
        <div key={ele._id.toString()}>
          <img src={ele.url} style={{ width: "140px" }} alt={ele.name} />
          <p>Bookname : {ele.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
