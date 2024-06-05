import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="d-flex flex-column justify-content align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-100 rounded bg-white border shadow p-4">
       <div className="d-flex flex-column justify-content align-items-center bg-light mb-4">
      <div className="search">
       <input type="text" placeholder="SEARCH...." onChange={(e) => {
      inputHandler(e.target.value);
       }}></input>
      </div>
       </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>CITY</th>
              <th>TEMPERATURE</th>
              <th>HUMIDITY</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.city}</td>
                <td>{item.temperature}</td>
                <td>{item.humidity}</td>
                <td>{item.short}</td>
                <td>
                  <Link to={`/read/${item.id}`} className="btn btn-success">
                    READ TEMP
                  </Link>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
