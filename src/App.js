import {
  Typography,
  Grid,
  TextField,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  setMassValue,
  setAccelatorValue,
} from "./Reducers/multipleMassAccelator";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: "%100",
  },
}));

const ForceGraphy = () => {
  const multipleMassAccelatorState = useSelector(
    (state) => state.multipleMassAccelatorState
  );
  return <Typography>{multipleMassAccelatorState.force}</Typography>;
};

const MassField = () => {
  const dispatch = useDispatch();
  return (
    <TextField
      onChange={(e) => {
        dispatch(setMassValue(e.target.value));
      }}
      variant="outlined"
    />
  );
};

const AccelerationField = () => {
  const dispatch = useDispatch();
  return (
    <TextField
      onChange={(e) => {
        dispatch(setAccelatorValue(e.target.value));
      }}
      variant="outlined"
      type="number"
    />
  );
};

const CreateItem = (props) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Grid item className={classes.gridItem}>
              <Typography>{props.text}</Typography>
            </Grid>
            <Grid item>{props.component}</Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

function App() {
  return (
    <Grid container direction="row" justify="center" spacing={3}>
      <CreateItem text="F" component={ForceGraphy()} />
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography>=</Typography>
          </Grid>
        </Grid>
      </Grid>
      <CreateItem text="M" component={MassField()} />
      <CreateItem text="A" component={AccelerationField()} />
    </Grid>
  );
}

export default App;
