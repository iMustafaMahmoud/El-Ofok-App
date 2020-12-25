import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles((theme) => ({
  tableContainer: {
    width: "85%",
  },
  table: {
    width: "100%",
  },
  root: {
    flexGrow: 1,
  },
  roott: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
