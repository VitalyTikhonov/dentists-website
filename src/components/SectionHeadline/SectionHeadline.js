import TextBlock from "../TextBlock/TextBlock";
import { memo } from "react";

const SectionHeadline = memo(function SectionHeadline(props) {
  return <TextBlock contents={{ sectionHeadline: props.text }}/>;
});

export default SectionHeadline;
