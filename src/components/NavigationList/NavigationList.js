import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TriangleArrowDown from "../UIControls/svgReactComponents/TriangleArrowDown";
// import cn from "classnames";

export function NavigationList(props) {
  const { data, level, classMap } = props;

  function createItem(itemProper, embeddedItems) {
    return <li className={classMap.item[level]} key={uuidv4()}>{itemProper}{embeddedItems}</li>;
  }

  function createList(listOrItemData, level) {
    if (Array.isArray(listOrItemData)) {
      return <ul className={`${classMap.list[level]} list-unstyling`} >{listOrItemData.map((item) => createList(item, level))}</ul>;
    } else {
      const { type, label, link, items } = listOrItemData;
      switch (type) {
        case "menu":
          return createItem(
            <button className={`${classMap.itemChild[level]} button-unstyling`}>
              {label}
              <TriangleArrowDown className={classMap.buttonTriangle} />
            </button>,

            items?.length > 0 && createList(items, level + 1)
          );
        case "route":
        case "hashLink":
          return createItem(
            <NavLink
              className={`${classMap.itemChild[level]} link-unstyling`}
              to={`${type === "route" ? "/" : ""}${link}`}
              activeClassName={type === "hashLink" ? classMap.activeClassName : ""}
            >
              {label}
            </NavLink>,

            items?.length > 0 && createList(items, level + 1)
          );
        default:
          console.warn('type', type);
          return null;
      }
    }
  }

  return createList(data, level);
}
