import React from "react";
import NameWithInputField from "../components/NameWithInputField";
import NameWithCheckbox from "../components/NameWithCheckbox";
import { useLocation } from "react-router";

const Reports = () => {
  const location = useLocation();
  const item_number = location.state?.new_index;
  const props_url = location.state?.nextUrl;

  const [data, setData] = React.useState(null);
  const [report_number, setReportNumber] = React.useState(item_number);
  const [is_disabled, setIsDisabled] = React.useState(true);
  const [nextUrl, setNextUrl] = React.useState("");
  const [prevUrl, setPrevUrl] = React.useState("");

  const panda_url =
    "http://office.panda-eco.com:53008/operation_record/ts_OperationRecord/";

  React.useEffect(() => {
    if (props_url) {
      fetchApiData(props_url);
    } else {
      fetchApiData();
    }
  }, []);

  const fetchApiData = (url) => {
    fetch(url ?? panda_url)
      .then((response) => response.json())
      .then((data) => {
        const { results, next, previous } = data;
        setNextUrl(next);
        setData((prevData) => (prevData ? [...prevData, ...results] : results));
        setPrevUrl(previous);
        if (nextUrl) {
          fetchApiData(nextUrl);
        }
      })
      .catch((err) => {
        console.log("Somethings not right", err);
      });
  };

  const nextButton = () => {
    if (data.length === report_number + 1) {
      fetchApiData(nextUrl);
      setReportNumber(0);
      return;
    } else {
      setReportNumber(report_number + 1);
    }
  };

  const prevButton = () => {
    if (report_number === 0 && !!prevUrl) {
      fetchApiData(prevUrl);
      setReportNumber(data.length - 1);
      return;
    } else if (report_number === 0) {
      setReportNumber(0);
    } else {
      setReportNumber(report_number - 1);
    }
  };

  const editButton = () => {
    setIsDisabled(false);
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
                patients_data={data[report_number].name_of_patient}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Country"
                patients_data={data[report_number].country || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Age at time of surgery"
                patients_data={
                  data[report_number].age_at_the_time_of_surgery || "-"
                }
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="State"
                patients_data={data[report_number].state || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of birth"
                patients_data={data[report_number].date_of_birth || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="City"
                patients_data={data[report_number].city || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of Admission"
                patients_data={data[report_number].date_of_admission || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Date of Discharge"
                patients_data={data[report_number].date_of_discharge || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Operation Performed"
                patients_data={data[report_number].operation_performed || "-"}
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Diagnosis"
                patients_data={data[report_number].diagnosis || "-"}
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Time Commenced"
                patients_data={data[report_number].time_commenced_field || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Time Completed"
                patients_data={data[report_number].time_completed_field || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Date of Operation"
                patients_data={data[report_number].date_of_operation || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Duration of Operation"
                patients_data={data[report_number].duration_of_operation || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Duration of Stay"
                patients_data={data[report_number].duration_of_stay || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Duration of Postoperative"
                patients_data={
                  data[report_number].duration_of_postoperative_stay || "-"
                }
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Complication"
                is_checked={!!data[report_number].complication}
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="Maligant"
                is_checked={!!data[report_number].malignant_field}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Complication Nature"
                patients_data={data[report_number].complications_nature || "-"}
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Pregnant After Surgery"
                is_checked={!!data[report_number].pregnant_after_surgery}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="How got Pregnant?"
                patients_data={
                  data[report_number].how_got_pregnant_field || "-"
                }
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
          </div>
          <div className="reports-right">
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Weight"
                patients_data={data[report_number].weight_of_patient || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Height"
                patients_data={data[report_number].height || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Uterus Weight"
                patients_data={data[report_number].weight_of_uterus || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Fibroid Weight"
                patients_data={data[report_number].weight_of_fibroid || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Limp Nodes Number"
                patients_data={
                  data[report_number].number_of_lymph_nodes_obtained || "-"
                }
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Why Convert to laparotomy"
                patients_data={
                  data[report_number].why_converted_to_laparotomy || "-"
                }
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Laparoscopy"
                is_checked={!!data[report_number].laparoscopy}
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="Vaginal"
                is_checked={!!data[report_number].vaginal_hysterectomy}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="vNOTES"
                is_checked={!!data[report_number].vnotes}
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="HIFU"
                is_checked={!!data[report_number].hifu}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Laparotomy"
                is_checked={!!data[report_number].laparotomy}
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="TCR Fibroid"
                is_checked={!!data[report_number].tcr_fibroid}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Single Incision Laparoscopic"
                is_checked={
                  !!data[report_number]
                    .single_incision_laparoscopic_hysterecromy
                }
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="Converted to"
                is_checked={!!data[report_number].converted_to_laparotomy}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Minor Surgery"
                is_checked={!!data[report_number].minor_surgery}
                is_disabled={is_disabled}
              />
              <NameWithCheckbox
                title="LSCS"
                is_checked={!!data[report_number].lscs}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="HPE"
                patients_data={data[report_number].hpe || "-"}
                is_disabled={is_disabled}
                is_textfield
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithInputField
                title="Blood Loss"
                patients_data={data[report_number].blood_loss || "-"}
                is_disabled={is_disabled}
              />
              <NameWithInputField
                title="Fever No. Days"
                patients_data={data[report_number].fever_number_of_days || "-"}
                is_disabled={is_disabled}
              />
            </div>
            <div className="reports-input-field-container">
              <NameWithCheckbox
                title="Blood"
                is_checked={!!data[report_number].blood_transfusion}
                is_disabled={is_disabled}
              />
            </div>
          </div>
        </div>
        <div className="reports-footer_button">
          <div className="reports-footer_button_container">
            <div>
              <button onClick={editButton}>
                {is_disabled ? "Edit" : "Submit"}
              </button>
            </div>
            {is_disabled && (
              <button
                disabled={report_number === 0 && !prevUrl}
                onClick={prevButton}
              >
                Previous
              </button>
            )}
            {is_disabled && <button onClick={nextButton}>Next</button>}
          </div>
        </div>
      </div>
    )
  );
};

export default Reports;
