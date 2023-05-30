import React from "react";
import { useNavigate } from "react-router-dom";

const UserListReports = () => {
  const navigate = useNavigate();
  React.useEffect(() => fetchApiData(), []);
  const [data, setData] = React.useState(null);
  const fetchApiData = () => {
    fetch(
      "http://office.panda-eco.com:53008/operation_record/ts_OperationRecord/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { results } = data;
        setData(results);
      })
      .catch((err) => {
        console.log("Somethings not right", err);
      });
  };

  const handleCardClick = (guid, index) => {
    navigate(`/reports/${guid}`, { state: { index } });
  };

  return (
    <div className="userlist_report">
      <h1 className="userlist_report--header">List of Patients</h1>
      {data &&
        data.map((item, index) => {
          return (
            <div
              onClick={() => handleCardClick(item.guid, index)}
              className="userlist_report--card"
              key={index}
            >
              <span className="userlist_report--card_name">
                Name: {item.name_of_patient}
              </span>
              <div className="userlist_report--card_information">
                <span className="userlist_report--card_name">
                  Country: {item.country || "-"}
                </span>
                <span className="userlist_report--card_name">
                  Date of Birth: {item.date_of_birth || "-"}
                </span>
                <span className="userlist_report--card_name">
                  Weight: {item.weight_of_patient || "-"}
                </span>
                <span className="userlist_report--card_name">
                  Height: {item.height || "-"}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserListReports;
