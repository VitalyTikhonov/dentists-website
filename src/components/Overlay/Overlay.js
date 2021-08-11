import './Overlay.scss';
import Cross from '../UIControls/svgReactComponents/Cross';

function Overlay({ handleClick, handleCloseClick, children }) {
  return (
    <div className="overlay" onClick={handleClick} >
      {children && <Cross className="overlay__close-icon" onClick={handleCloseClick} />}

      {children}
    </div>
  );
}

export default Overlay;
