import './PageDimmer.scss';

function PageDimmer(props) {
  const { handleClick } = props;

  return (
    <div className="page-dimmer" onClick={handleClick} />
  );
}

export default PageDimmer;
