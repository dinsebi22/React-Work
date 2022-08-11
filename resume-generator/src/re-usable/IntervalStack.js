import Stack from "react-bootstrap/esm/Stack";
import NamedInput from "./NamedInput";

function IntervalStack(props) {
  return (
    <Stack direction="horizontal" gap={2}>
      <NamedInput
        type={"date"}
        label={"Start"}
        onChange={props.onChangeStartDate}
      />
      <NamedInput
        type={"date"}
        label={"End"}
        onChange={props.onChangeEndDate}
      />
    </Stack>
  );
}

export default IntervalStack;
