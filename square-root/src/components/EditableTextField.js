import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import useOutsideAlerter from "./hooks/useOutsideAlerter";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function EditableTextField(props) {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const fieldRef = useRef(null);
  useOutsideAlerter(fieldRef, () => setEditMode(false));

  console.log(props)

  return (
    <FormControl fullWidth className={classes.margin} variant="outlined">
      <OutlinedInput
        ref={fieldRef}
        name={props.name}
        defaultValue={props.value}
        type="text"
        disabled={!editMode}
        variant="outilned"
        onChange={props.handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="edit field"
              onClick={() => setEditMode(true)}
            >
              <Edit />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

/*class EditableTextField extends Component {
  render() {
    return (
      <FormControl fullWidth className={classes.margin} variant="filled">
        <OutlinedInput
          name={this.props.name}
          defaultValue={this.state.fieldValue}
          type="text"
          disabled={!this.state.editMode}
          variant="outilned"
          onChange={this.handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="edit field" onClick={this.handleClick}>
                <Edit />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      /*
        <Input
          name={this.props.name}
          defaultValue={this.state.fieldValue}
          margin="normal"
          error={this.state.email === ""}
          onChange={this.handleChange}
          disabled={!this.state.editMode}
          variant="outlined"
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOut}
          InputProps={{
            classes: {
              disabled: classes.disabled,
            },
            endAdornment: this.state.mouseOver ? (
              <InputAdornment position="end">
                <IconButton onClick={this.handleClick}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ) : (
              ""
            ),
          }}
        />*/
/*);
  }
}

export default EditableTextField;*/
