import './Overlay.scss';
import Cross from '../UIControls/svgReactComponents/Cross';
import cn from "classnames";

function Overlay({ handleClick, handleCloseClick, children }) {
  return (
    <div className={cn("overlay", { overlay_withCloseIcon: Boolean(children) })} onClick={handleClick} >
      {children && <Cross className="overlay__close-icon" onClick={handleCloseClick} />}

      {children}
    </div>
  );
}

export default Overlay;
