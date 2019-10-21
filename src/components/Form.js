import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const Form = props => {
  return (
    <form onSubmit={props.submitForm}>
      <div className="add-item">
        <Input
          className="input-search"
          type="text"
          value={props.newPresent}
          onChange={props.getQuery}
        />
        <Button
          className="add-button"
          color="primary"
          variant="outlined"
          type="submit"
          onClick={props.submitForm}
        >
          Añadir
        </Button>
      </div>
      <div className="delete-item">
        <Button
          className="delete-icon"
          onClick={props.deletePresents}
          startIcon={<DeleteOutlinedIcon />}
        >
          Borrar lista
        </Button>
      </div>
    </form>
  );
};

export default Form;
