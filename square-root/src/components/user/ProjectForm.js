import React from "react";
import EditableTextField from "../EditableTextField";

export default function ProjectForm(props) {
  let {
    values,
    errors,
    handleChange,
    handleSubmit,
    page,
    editMode,
    setEditMode,
    project,
  } = props;

  return (
    <form>
      {page ? (
        <>
          <div style={{ width: "80%" }}>
            <label className="p-lbl">Navn</label>
            <EditableTextField
              value={values.name || project.name}
              name="name"
              editMode={editMode.nameMode}
              setEditMode={() => setEditMode("nameMode", true)}
              onChange={(e) => handleChange(e, editMode)}
            />
            {errors.name && <p className="help is-danger">{errors.name}</p>}
            <label className="p-lbl">Adresse</label>
            <EditableTextField
              value={values.address || project.address}
              name="address"
              editMode={editMode.addressMode}
              setEditMode={() => setEditMode("addressMode", true)}
              onChange={(e) => handleChange(e, editMode)}
            />
            {errors.address && (
              <p className="help is-danger">{errors.address}</p>
            )}
            <div className="p-flex">
              <div className="p-classFlex">
                <label className="p-lblFlex">PostNr</label>
                <EditableTextField
                  value={values.zip || project.postalCode}
                  name="zip"
                  editMode={editMode.zipMode}
                  setEditMode={() => setEditMode("zipMode", true)}
                  onChange={(e) => handleChange(e, editMode)}
                />
                {errors.zip && <p className="help is-danger">{errors.zip}</p>}
              </div>
              <div className="p-classFlex">
                <label className="p-lblFlex">Poststed</label>
                <input
                  type="text"
                  className="p-input-inline p-text-input"
                  value={values.city || project.city}
                  disabled
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="p-btn-create">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, editMode)}
              disabled={
                !editMode.nameMode && !editMode.addressMode && !editMode.zipMode
              }
            >
              OPPRETT PROSJEKT
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="p-inputBox">
            <label className="p-lbl">Navn</label>
            <input
              type="text"
              name="name"
              placeholder="Prosjektets navn.."
              className="p-inp-text p-text-input"
              value={values.name || ""}
              onChange={handleChange}
            />
            {errors.name && <p className="help is-danger">{errors.name}</p>}
            <label className="p-lbl">Adresse</label>
            <input
              type="text"
              name="address"
              placeholder="Prosjektets adresse.."
              className="p-inp-text p-text-input"
              value={values.address || ""}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="help is-danger">{errors.address}</p>
            )}
            <div className="p-flex">
              <div className="p-classFlex">
                <label className="p-lblFlex">PostNr</label>
                <input
                  type="text"
                  name="zip"
                  className="p-input-inline p-text-input"
                  pattern="[0-9]{4}"
                  value={values.zip || ""}
                  onChange={handleChange}
                />
                {errors.zip && <p className="help is-danger">{errors.zip}</p>}
              </div>
              <div className="p-classFlex">
                <label className="p-lblFlex">Poststed</label>
                <input
                  type="text"
                  name="city"
                  className="p-input-inline p-text-input"
                  value={values.city || ""}
                  onChange={handleChange}
                />
                {errors.city && <p className="help is-danger">{errors.city}</p>}
              </div>
            </div>
          </div>
          <div className="p-btn-create">
            <button
              type="submit"
              className="project-modal-btn"
              onClick={handleSubmit}
            >
              OPPRETT PROSJEKT
            </button>
          </div>
        </>
      )}
    </form>
  );
}
