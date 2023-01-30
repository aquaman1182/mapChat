import { makeStyles } from "@material-ui/core/styles";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

type Props = { name: string };

// Functional Component => FC
const Main: React.FC<Props> = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name} />
    </div>
  );
};

export default Main;
