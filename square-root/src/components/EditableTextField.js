import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function EditableTextField(props) {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.margin} variant='outlined'>
      <OutlinedInput
        name={props.name}
        defaultValue={props.value}
        type='text'
        disabled={!props.editMode}
        variant='outilned'
        onChange={(e) => props.onChange(e)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='edit field'
              onClick={() => props.setEditMode(true)}
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
