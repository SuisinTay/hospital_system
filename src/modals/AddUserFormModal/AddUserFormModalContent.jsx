import React from "react";
import NameWithInputField from "../../components/NameWithInputField";
import NameWithCheckbox from "../../components/NameWithCheckbox";

const AddUserFormModalContent = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="reports-container">
      <div className="reports-left">
        <div className="reports-input-field-container">
          <NameWithInputField title="Name of Patient" id="name_of_patient" />
          <NameWithInputField title="Country" id="country" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Age at time of surgery"
            id="age_at_the_time_of_surgery"
          />
          <NameWithInputField title="State" id="state" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField title="Date of birth" id="date_of_birth" />
          <NameWithInputField title="City" id="city" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Date of Admission"
            id="date_of_admission"
          />
          <NameWithInputField
            title="Date of Discharge"
            id="date_of_discharge"
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Operation Performed"
            id="operation_performed"
            is_textfield
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField title="Diagnosis" id="diagnosis" is_textfield />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Time Commenced"
            id="time_commenced_field"
          />
          <NameWithInputField
            title="Time Completed"
            id="time_completed_field"
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Date of Operation"
            id="date_of_operation"
          />
          <NameWithInputField
            title="Duration of Operation*"
            id="duration_of_operation"
            is_required
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Duration of Stay*"
            id="duration_of_stay"
            is_required
          />
          <NameWithInputField
            title="Duration of Postoperative*"
            id="duration_of_postoperative_stay"
            is_required
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="Complication" id="complication" />
          <NameWithCheckbox title="Maligant" id="malignant_field" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Complication Nature"
            id="complications_nature"
            is_textfield
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox
            title="Pregnant After Surgery"
            id="pregnant_after_surgery"
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="How got Pregnant?"
            id="how_got_pregnant_field"
            is_textfield
          />
        </div>
      </div>
      <div className="reports-right">
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Weight*"
            id="weight_of_patient"
            is_required
          />
          <NameWithInputField title="Height*" id="height" is_required />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField title="Uterus Weight" id="weight_of_uterus" />
          <NameWithInputField title="Fibroid Weight" id="weight_of_fibroid" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Limp Nodes Number"
            id="number_of_lymph_nodes_obtained"
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField
            title="Why Convert to laparotomy"
            id="why_converted_to_laparotomy"
            is_textfield
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="Laparoscopy" id="laparoscopy" />
          <NameWithCheckbox title="Vaginal" id="vaginal_hysterectomy" />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="vNOTES" id="vnotes" />
          <NameWithCheckbox title="HIFU" id="hifu" />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="Laparotomy" id="laparotomy" />
          <NameWithCheckbox title="TCR Fibroid" id="tcr_fibroid" />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox
            title="Single Incision Laparoscopic"
            id="single_incision_laparoscopic_hysterecromy"
          />
          <NameWithCheckbox title="Converted to" id="converted_to_laparotomy" />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="Minor Surgery" id="minor_surgery" />
          <NameWithCheckbox title="LSCS" id="lscs" />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField title="HPE" id="hpe" is_textfield />
        </div>
        <div className="reports-input-field-container">
          <NameWithInputField title="Blood Loss" id="blood_loss" />
          <NameWithInputField
            title="Fever No. Days"
            id="fever_number_of_days"
          />
        </div>
        <div className="reports-input-field-container">
          <NameWithCheckbox title="Blood" id="blood_transfusion" />
          <NameWithInputField title="Guid*" id="guid" is_required />
        </div>
      </div>
    </div>

    <div className="submit-container">
      <button className="submit-button" type="submit">
        Submit
      </button>
    </div>
  </form>
);

export default AddUserFormModalContent;
