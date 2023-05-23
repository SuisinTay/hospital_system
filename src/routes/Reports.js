import React from "react";
import NameWithInputField from "../components/NameWithInputField";
import NameWithCheckbox from "../components/NameWithCheckbox";

const Reports = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => fetchApiData(), []);

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
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Diagnosis"
                patients_data={data[0].diagnosis || "-"}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Time Commenced"
                patients_data={data[0].time_commenced_field || "-"}
              />
              <NameWithInputField
                title="Time Completed"
                patients_data={data[0].time_completed_field || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of Operation"
                patients_data={data[0].date_of_operation || "-"}
              />
              <NameWithInputField
                title="Duration of Operation"
                patients_data={data[0].duration_of_operation || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Duration of Stay"
                patients_data={data[0].duration_of_stay || "-"}
              />
              <NameWithInputField
                title="Duration of Postoperative"
                patients_data={data[0].duration_of_postoperative_stay || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Complication"
                is_checked={!!data[0].complication}
              />
              <NameWithCheckbox
                title="Maligant"
                is_checked={!!data[0].malignant_field}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Complication Nature"
                patients_data={data[0].complications_nature || "-"}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Pregnant After Surgery"
                is_checked={!!data[0].pregnant_after_surgery}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="How got Pregnant?"
                patients_data={data[0].how_got_pregnant_field || "-"}
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
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Uterus Weight"
                patients_data={data[0].weight_of_uterus || "-"}
              />
              <NameWithInputField
                title="Fibroid Weight"
                patients_data={data[0].weight_of_fibroid || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Limp Nodes Number"
                patients_data={data[0].number_of_lymph_nodes_obtained || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Why Convert to laparotomy"
                patients_data={data[0].why_converted_to_laparotomy || "-"}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Laparoscopy"
                is_checked={!!data[0].laparoscopy}
              />
              <NameWithCheckbox
                title="Vaginal"
                is_checked={!!data[0].vaginal_hysterectomy}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox title="vNOTES" is_checked={!!data[0].vnotes} />
              <NameWithCheckbox title="HIFU" is_checked={!!data[0].hifu} />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Laparotomy"
                is_checked={!!data[0].laparotomy}
              />
              <NameWithCheckbox
                title="TCR Fibroid"
                is_checked={!!data[0].tcr_fibroid}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Single Incision Laparoscopic"
                is_checked={!!data[0].single_incision_laparoscopic_hysterecromy}
              />
              <NameWithCheckbox
                title="Converted to"
                is_checked={!!data[0].converted_to_laparotomy}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Minor Surgery"
                is_checked={!!data[0].minor_surgery}
              />
              <NameWithCheckbox title="LSCS" is_checked={!!data[0].lscs} />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="HPE"
                patients_data={null}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Blood Loss"
                patients_data={data[0].blood_loss || "-"}
              />
              <NameWithInputField
                title="Fever No. Days"
                patients_data={data[0].fever_number_of_days || "-"}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Blood"
                is_checked={!!data[0].blood_transfusion}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Reports;
