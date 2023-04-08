import React,{useState, useEffect} from "react";
import Header from "./header";
import axios from "axios";

export default function AllLocations() { 

  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/location/")
      .then(res => {
        console.log(res.data);
        setLocations(res.data);
      })
      .catch(err => {
        alert(err.message);
      })
  }, [])

  const filteredLocations = locations.filter((location) => {
    return location;
  });

  return (
    <>
      <Header/><br/>
      
      <br />

      <div className="container">
        <h3>All Locations</h3><br />
      </div>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Location</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Serial Number</th>
         
              
            </tr>
          </thead>
          <tbody>
            {filteredLocations.map((row, index) => (
              <tr key={index}>
                <td>{row._id}</td>
                <td>{row.location}</td>
                <td>{row.address}</td>
                <td>{row.phone}</td>
                <td>{row.serialNo}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
