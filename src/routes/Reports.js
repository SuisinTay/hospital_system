import React from "react";
import NameWithInputField from "../components/NameWithInputField";

const Reports = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => fetchApiData(), []);

  const fetchApiData = () => {
    console.log("heellooo");
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

  return (
    data && (
      <div className="reports">
        <div className="reports-header">
          <h1>Reports</h1>
        </div>
        <div className="reports-container">
          <div className="reports-left">
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Name of Patient"
                patients_data={data[0].name_of_patient}
              />
              <NameWithInputField
                title="Country"
                patients_data={data[0].country || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Age at time of surgery"
                patients_data={data[0].age_at_the_time_of_surgery || "-"}
              />
              <NameWithInputField
                title="State"
                patients_data={data[0].state || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of birth"
                patients_data={data[0].date_of_birth || "-"}
              />
              <NameWithInputField
                title="City"
                patients_data={data[0].city || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of Admission"
                patients_data={data[0].date_of_admission || "-"}
              />
              <NameWithInputField
                title="Date of Discharge"
                patients_data={data[0].date_of_discharge || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Operation Performed"
                patients_data={data[0].operation_performed || "-"}
                is_textfield
              />
            </div>
          </div>
          <div className="reports-right">
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Weight"
                patients_data={data[0].weight_of_patient || "-"}
              />
              <NameWithInputField
                title="Height"
                patients_data={data[0].height || "-"}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Reports;
