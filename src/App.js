import { Typography, Grid, TextField } from "@material-ui/core";

const ForceGraphy = () => {
  return <Typography></Typography>;
};

const MassField = () => {
  return <TextField variant="outlined" />;
};

const AccelerationField = () => {
  return <TextField variant="outlined" />;
};

function App() {
  return (
    <Grid
      // style={{ height: "%100", background: "#000000" }}
      container
      direction="row"
      justify="center"
      spacing={10}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography>F</Typography>
          </Grid>
          <Grid item>
            <ForceGraphy />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography>=</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item style={{ width: "%100" }}>
            <Typography>M</Typography>
          </Grid>
          <Grid item>
            <MassField />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item style={{ width: "%100" }}>
            <Typography>A</Typography>
          </Grid>
          <Grid item>
            <AccelerationField />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
