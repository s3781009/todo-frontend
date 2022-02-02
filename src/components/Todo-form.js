import React, { Fragment, useState } from "react";
import { Button, Card, Grid, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
const TodoForm = (props) => {
  const [click, setClick] = useState(false);
  const toggleClick = () => {
    click ? setClick(false) : setClick(true);
  };

  return click ? (
    <Fragment>
      <AddCircleOutlineIcon fontSize="large" onClick={() => toggleClick()} />
      <Grid container direction="row" marginLeft="5%" padding="30px">
        <Card>
          <Grid container padding="10px" spacing="10px">
            <TextField
              multiline="100"
              size="large"
              type="text"
              onChange={(event) => props.handleChange(event)}
            />
            <Button>
              <CancelPresentationIcon color="error" />
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={(event) => props.handleSubmit(event)}
            >
              Submit
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Fragment>
  ) : (
    <AddCircleOutlineIcon fontSize="large" onClick={() => toggleClick()} />
  );
};

export default TodoForm;
