import React from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import AddUserFormModal from "../modals/AddUserFormModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserListReports = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(null);
  const [user_data, setUserData] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [nextUrl, setNextUrl] = React.useState("");
  const dataContainerRef = React.useRef(null);
  React.useEffect(() => fetchApiData(), []);
  React.useEffect(() => submitUserInformation(), [user_data]);

  const panda_api =
    "http://office.panda-eco.com:53008/operation_record/ts_OperationRecord/";

  const post_request_option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user_data),
  };

  const fetchApiData = (url) => {
    fetch(url || panda_api)
      .then((response) => response.json())
      .then((data) => {
        const { results, next } = data;
        const updated_result = results.map((result) => ({
          ...result,
          nextUrl,
        }));
        setData((prevData) =>
          prevData ? [...prevData, ...updated_result] : updated_result
        );
        setNextUrl(next);
      })
      .catch((err) => {
        console.log("Somethings not right", err);
      });
  };

  const handleScroll = () => {
    const dataContainer = dataContainerRef.current;
    const scrollPosition = dataContainer.scrollTop + dataContainer.clientHeight;
    const containerHeight = dataContainer.scrollHeight;

    if (scrollPosition >= containerHeight && nextUrl) {
      fetchApiData(nextUrl);
    }
  };

  const submitUserInformation = () => {
    if (user_data) {
      fetch(panda_api, post_request_option)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json();
          } else {
            throw new Error("Response was not in JSON format");
          }
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleCardClick = (guid, index, nextUrl) => {
    const array_length = 20;
    const new_index = index % array_length;
    navigate(`/reports/${guid}`, { state: { new_index, nextUrl } });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_target = e.target;
    setUserData({
      guid: form_target?.elements["guid"]?.value ?? null,
      ref_no_field: form_target?.elements["ref_no_field"]?.value ?? "-",
      hifu_charges_hospital:
        form_target?.elements["hifu_charges_hospital"]?.value ?? "",
      new_field: form_target?.elements["new_field"]?.value ?? "",
      city: form_target?.elements["city"]?.value ?? "",
      malignant_field: form_target?.elements["malignant_field"]?.value ?? "",
      vnotes: form_target?.elements["vnotes"]?.value ?? "",
      single_incision_laparoscopic_hysterecromy:
        form_target?.elements["single_incision_laparoscopic_hysterecromy"]
          ?.value ?? "",
      hifu_charges_cash:
        form_target?.elements["hifu_charges_cash"]?.value ?? "",
      new_field_1: form_target?.elements["new_field_1"]?.value ?? "",
      hifu: form_target?.elements["hifu"]?.value ?? "",
      name_of_patient: form_target?.elements["name_of_patient"]?.value ?? "",
      date_of_operation:
        form_target?.elements["date_of_operation"]?.value ?? "",
      diagnosis: form_target?.elements["diagnosis"]?.value ?? "",
      laparoscopy: form_target?.elements["laparoscopy"]?.value ?? "",
      laparotomy: form_target?.elements["laparotomy"]?.value ?? "",
      operation_performed:
        form_target?.elements["operation_performed"]?.value ?? "",
      operative_findings:
        form_target?.elements["operative_findings"]?.value ?? "",
      operative_procedures:
        form_target?.elements["operative_procedures"]?.value ?? "",
      hpe: form_target?.elements["hpe"]?.value ?? "",
      complications_nature:
        form_target?.elements["complications_nature"]?.value ?? "",
      treatment_given: form_target?.elements["treatment_given"]?.value ?? "",
      duration_of_treatment:
        form_target?.elements["duration_of_treatment"]?.value ?? "",
      pregnant: form_target?.elements["pregnant"]?.value ?? "",
      recurrance: form_target?.elements["recurrance"]?.value ?? "",
      how_pregnant_field:
        form_target?.elements["how_pregnant_field"]?.value ?? "",
      dvd_from_ot: form_target?.elements["dvd_from_ot"]?.value ?? "",
      dvd_backup: form_target?.elements["dvd_backup"]?.value ?? "",
      post_op_orders: form_target?.elements["post_op_orders"]?.value ?? "",
      video_for_raid_storage:
        form_target?.elements["video_for_raid_storage"]?.value ?? "",
      specimen_photo: form_target?.elements["specimen_photo"]?.value ?? "",
      images_from_hard_disk:
        form_target?.elements["images_from_hard_disk"]?.value ?? "",
      photo_for_patient:
        form_target?.elements["photo_for_patient"]?.value ?? "",
      dvd_for_patient: form_target?.elements["dvd_for_patient"]?.value ?? "",
      photo_and_dvd_given_to_patient:
        form_target?.elements["photo_and_dvd_given_to_patient"]?.value ?? "",
      surgeon_field: form_target?.elements["surgeon_field"]?.value ?? "",
      anaesthetist_field:
        form_target?.elements["anaesthetist_field"]?.value ?? "",
      assistant_field: form_target?.elements["assistant_field"]?.value ?? "",
      scrub_nurse: form_target?.elements["scrub_nurse"]?.value ?? "",
      time_commenced_field:
        form_target?.elements["time_commenced_field"]?.value ?? "",
      time_completed_field:
        form_target?.elements["time_completed_field"]?.value ?? "",
      type_field: form_target?.elements["type_field"]?.value ?? "",
      anaesthesia_field:
        form_target?.elements["anaesthesia_field"]?.value ?? "",
      operation_video: form_target?.elements["operation_video"]?.value ?? "",
      hpe_pdf: form_target?.elements["hpe_pdf"]?.value ?? "",
      photo: form_target?.elements["photo"]?.value ?? "",
      photo_1: form_target?.elements["photo_1"]?.value ?? "",
      photo3: form_target?.elements["photo3"]?.value ?? "",
      photo5: form_target?.elements["photo5"]?.value ?? "",
      photo6: form_target?.elements["photo6"]?.value ?? "",
      single_incision_laparoscopic_surgery:
        form_target?.elements["single_incision_laparoscopic_surgery"]?.value ??
        "",
      operation_date: form_target?.elements["operation_date"]?.value ?? "",
      apple_trocar: form_target?.elements["apple_trocar"]?.value ?? "",
      hd_charges: form_target?.elements["hd_charges"]?.value ?? 1,
      hd: form_target?.elements["hd"]?.value ?? "",
      apple: form_target?.elements["apple"]?.value ?? "",
      age: form_target?.elements["age"]?.value ?? "",
      converted_to_laparotomy:
        form_target?.elements["converted_to_laparotomy"]?.value ?? "",
      why_converted_to_laparotomy:
        form_target?.elements["why_converted_to_laparotomy"]?.value ?? "",
      weight_of_uterus: form_target?.elements["weight_of_uterus"]?.value ?? "",
      blood_loss: form_target?.elements["blood_loss"]?.value ?? "",
      blood_transfusion:
        form_target?.elements["blood_transfusion"]?.value ?? "",
      fever_number_of_days:
        form_target?.elements["fever_number_of_days"]?.value ?? "",
      weight_of_patient:
        form_target?.elements["weight_of_patient"]?.value ?? "",
      duration_of_operation:
        form_target?.elements["duration_of_operation"]?.value ?? "",
      date_of_admission:
        form_target?.elements["date_of_admission"]?.value ?? "",
      date_of_discharge:
        form_target?.elements["date_of_discharge"]?.value ?? "",
      duration_of_stay: form_target?.elements["duration_of_stay"]?.value ?? "",
      date_of_birth: form_target?.elements["date_of_birth"]?.value ?? "",
      age_at_the_time_of_surgery:
        form_target?.elements["age_at_the_time_of_surgery"]?.value ?? "",
      number_of_lymph_nodes_obtained:
        form_target?.elements["number_of_lymph_nodes_obtained"]?.value ?? "",
      research_updated: form_target?.elements["research_updated"]?.value ?? "",
      height: form_target?.elements["height"]?.value ?? "",
      comments: form_target?.elements["comments"]?.value ?? "",
      complication: form_target?.elements["complication"]?.value ?? "",
      minor_surgery: form_target?.elements["minor_surgery"]?.value ?? "",
      weight_of_fibroid:
        form_target?.elements["weight_of_fibroid"]?.value ?? "",
      lscs: form_target?.elements["lscs"]?.value ?? "",
      pregnant_after_surgery:
        form_target?.elements["pregnant_after_surgery"]?.value ?? "",
      how_got_pregnant_field:
        form_target?.elements["how_got_pregnant_field"]?.value ?? "",
      recurrance_of_cyst_field:
        form_target?.elements["recurrance_of_cyst_field"]?.value ?? "",
      record_disposed: form_target?.elements["record_disposed"]?.value ?? "",
      vaginal_hysterectomy:
        form_target?.elements["vaginal_hysterectomy"]?.value ?? "",
      tcr_fibroid: form_target?.elements["tcr_fibroid"]?.value ?? "",
      number_3d_charges: form_target?.elements["number_3d_charges"]?.value ?? 1,
      duration_of_postoperative_stay:
        form_target?.elements["duration_of_postoperative_stay"]?.value ?? "",
    });
  };

  return (
    <React.Fragment className="userlist_report-parent">
      <div
        id="id_userlist_report"
        className="userlist_report"
        ref={dataContainerRef}
        onScroll={() => handleScroll()}
      >
        <h1 className="userlist_report--header">List of Patients</h1>
        {data &&
          data.map((item, index) => {
            return (
              <div
                onClick={() => handleCardClick(item.guid, index, item.nextUrl)}
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
      <div
        className="userlist_report-add_user_button"
        onClick={() => {
          console.log(isModalOpen);
          setIsModalOpen(true);
        }}
      >
        <FaIcons.FaPlus />
      </div>
      <AddUserFormModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  );
};

export default UserListReports;
