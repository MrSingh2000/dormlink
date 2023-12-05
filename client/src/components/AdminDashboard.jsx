import React, { useEffect, useState } from "react";
import "./card/card.css";
import CardFlip from "./card/card";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminDashboard() {
  const authToken = useSelector((store) => store.authToken.token);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // Check if authToken is not empty before making the request
      if (authToken) {
        try {
          const response = await axios({
            url: `${process.env.REACT_APP_HOST}/api/admin/fetch`,
            method: "GET",
            headers: {
              authToken: authToken,
            },
          });

          setData(response.data);
          console.log("data: ", response.data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getData();
  }, [authToken]);

  return (
    <div className="grid grid-cols-3">
      {data.length > 0 ? (
      data.map((item, index) => <CardFlip key={index} img={item.img} doc={item.docs} info={item.info}/>)
    ) : (
      <p>Loading...</p> // You can replace this with any loading UI
    )}
     {/* <CardFlip />
     <CardFlip />
     <CardFlip />
     <CardFlip /> */}
    </div>
  );
}

export default AdminDashboard;
