import React from "react";
import { Box, Grid } from "@material-ui/core";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import DataTable from "./components/Datatable/Datatable";
import { FakeStudentsService } from "./hooks/FakeStudentsService";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const users = FakeStudentsService();
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid container spacing={4} item xs={12}>
          <Grid item container justify="center">
            <DataTable users={users} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
