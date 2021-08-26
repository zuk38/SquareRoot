import React, { useState } from "react";
import "./projects.css";
import { withUserConsumer } from "../../context/user";
import EditableTextField from "../../components/EditableTextField";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/EditAccountValidation";
import AuthModal from "../../components/login/AuthModal";

function Account({ context }) {
  const { values, errors, handleChange, handleSubmit, handleDropDownChange } = useForm(
    callback,
    validate,
    log
  );

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState({
    emailMode: false,
    nameMode: false,
    phoneMode: false,
    roleMode: false,
  });
  const { user, email, phone_number, role, updateUser } = context;

  function callback() {
    setShowModal(true);
    setEditMode({
      emailMode: false,
      nameMode: false,
      phoneMode: false,
      roleMode: false,
    });
  }

  async function log() {
    //form validated
    //cognito integration here, may detect cognito errors
    console.log(values);
    await updateUser(values);
  }

  let role_options = [
    {
      dbValue: "Real Estate Developer",
      displayValue: "Eiendomsutvikler",
    },
    {
      dbValue: "Landscape Architect",
      displayValue: "Landskapsarkitekt",
    },
    {
      dbValue: "Landscape Entrepreneur",
      displayValue: "Landskapsentreprenør",
    },
    {
      dbValue: "Plant Nursery",
      displayValue: "Planteskole",
    },
  ];

  role_options = role_options.map((item, index) => {
    if (item.dbValue === role) values.role = item.displayValue;
    return <option key={index}>{item.displayValue}</option>;
  });

  const handleDropdown = (e) => {
    setEditMode({roleMode: true})
    handleDropDownChange(e)
  }

  return (
    <>
      {showModal && (
        <AuthModal
          title="Account Updated!"
          showModal={() => setShowModal(true)}
          setShowWelcomeModal={() => setShowModal(false)}
        />
      )}
      <div className="acc-container">
        <div className="acc-title">
          <h1>Administrer Konto</h1>
        </div>
        <form>
          <p className="settings-p">Navn</p>
          <EditableTextField
            value={values.name || user}
            name="name"
            editMode={editMode.nameMode}
            setEditMode={() => setEditMode({ nameMode: true })}
            onChange={(e) => handleChange(e, editMode)}
          />
          {errors.name && <p className="help is-danger">{errors.name}</p>}

          <label className="settings-lbl"></label>
          <p className="settings-p">E-post</p>
          <EditableTextField
            value={values.email || email}
            name="email"
            editMode={editMode.emailMode}
            setEditMode={() => setEditMode({ emailMode: true })}
            onChange={(e) => handleChange(e, editMode)}
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}

          <label className="settings-lbl"></label>
          <p className="settings-p">Mobil</p>
          <EditableTextField
            value={values.phone || phone_number}
            name="phone"
            editMode={editMode.phoneMode}
            setEditMode={() => setEditMode({ phoneMode: true })}
            onChange={(e) => handleChange(e, editMode)}
          />
          {errors.phone && <p className="help is-danger">{errors.phone}</p>}

          <label className="settings-lbl"></label>
          <p className="settings-p">Rolle</p>

          <select name="role" id="role" defaultValue={values.role} onChange={(e) => handleDropdown(e)}>
            {role_options}
          </select>
        </form>
        <button
          type="submit"
          name="btn-account"
          onClick={(e) => handleSubmit(e, editMode)}
          disabled={
            !editMode.nameMode && !editMode.emailMode && !editMode.phoneMode && !editMode.roleMode
          }
        >
          Lagre endringer
        </button>
      </div>
    </>
  );
}

export default withUserConsumer(Account);
