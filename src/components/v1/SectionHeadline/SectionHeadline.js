import TextBlock from "../TextBlock/TextBlock";

const SectionHeadline = function SectionHeadline(props) {
  return <TextBlock contents={{ sectionHeadline: props.text }}/>;
}

export default SectionHeadline;
