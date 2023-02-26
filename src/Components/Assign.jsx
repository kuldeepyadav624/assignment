import axios from "axios";
import { useEffect, useState } from "react";
import avatar from "../avatar.png"; //image import

function Demo() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filteredData, setFilteredData] = useState('');
  const [sortBy, setSortBy] = useState("name");
  const [ascDesc, setAscDesc] = useState("asc");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  //API fetch
  const fetchData = async () => {
    const result = await axios.get("https://coralmango.com/api/react-test");
    console.log(result.data);
    if (result) {
      setData(result.data);
      setSearchQuery(result.data);
    }
  };

  // search inputhandle
  const handleInputChange = (e) => {
    const input= e.target.value;
      setData(searchQuery);
      const filteredArray = searchQuery.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setData(filteredArray);
    setFilteredData(input);
    console.log("filterarray",filteredArray);
  };
  
  console.log("data",data);
  console.log("filterdata",filteredData);
  console.log("search",searchQuery);

// sort by name & age
  useEffect(() => {
    const tempData = filteredData ? [...searchQuery] : [...data];
    const sortedData = [...tempData].sort((a, b) => {
      if (sortBy === "name") {
        if (ascDesc === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else {
        if (ascDesc === "asc") {
          return a.age - b.age;
        } else {
          return b.age - a.age;
        }
      }
    });
    console.log(">>>>>>>sortedData", sortedData);

    setData(sortedData);
  }, [sortBy, ascDesc]);


  return (
    <>
{/* toggle */}
      <div className="toggle">
        <button onClick={() => setStatus(!status)}>Toggle</button>
      </div>

 {/* input feild */}
        <div className="table">
          <div>
            <input
              className="inputBox"
              type="search"
              placeholder="Search By Name "
              value={filteredData}
              onChange={(e) => handleInputChange(e)}
            />
{/* search after result */}
            <div className="view">
           {filteredData ? <h2>You are viewing filtered results</h2>: null}
            </div>
          </div>
{/* sort by age & name */}
          <div className="container">
            {/* <span>Sort By:- </span> */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value={"name"} set="true">
                Name
              </option>
              <option value={"age"}> Age</option>
            </select>

            <select
              value={ascDesc}
              onChange={(e) => setAscDesc(e.target.value)}
            >
              <option value={"asc"} set="true">
                Asc
              </option>
              <option value={"desc"}>Desc</option>
            </select>
          </div>
        </div>

{/* toggle */}
        {status ? (

//  data fatch in table format         
          <table id="customers">
            <tr>
              <th>name</th>
              <th>age</th>
              <th>occuption</th>
            </tr>

            <tbody>
              {data.length
                ? data.map((item, index) => {
                    // console.log(">>>>>>>>>>item", item);
                    return (
                      <tr key={`${item.name}${index}`}>
                        <td>
                          <div key={item.id}>{item.name}</div>
                        </td>
                        <td>
                          <div key={item.id}>{item.age}</div>
                        </td>
                        <td>
                          <div key={item.id}>{item.occupation}</div>
                        </td>
                      </tr>
                    );
                  })
                : "No Resuls Found!"} {/*if search out of keyword */}
            </tbody>
          </table>
        ) : (
//  data fetch in card format
          <div className="main">
            {data.length ? (
              data.map((item, index) => {
                return (
                  <div className="card">
                    <div className="image">
                      <img src={avatar} alt="avt" />
                    </div>
                    <div className="card-data">
                      <h3 key={item.id}>{item.name}</h3>
                      <h4 key={item.id}>{item.age}</h4>
                      <p key={item.id}>{item.occupation}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>No Result Found!</h2>
            )}
          </div>
        )}
      
    </>
  );
}

export default Demo;
