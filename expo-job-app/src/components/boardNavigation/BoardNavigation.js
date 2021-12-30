import style from "./BoardNavigation.module.css";
import React from "react";

export default class BoardNavigation extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <button className={style.navSection}>
          <span class="material-icons">arrow_back</span>
        </button>
        <div className={style.pagesList}>
          <PageTag pageId="1" />
          <PageTag pageId="2" />
          <PageTag pageId="3" />

          <div className={style.dots}>
            <span class="material-icons">more_horiz</span>
          </div>

          <PageTag pageId="7" />
        </div>
        <button className={style.navSection}>
          <span class="material-icons">arrow_forward</span>
        </button>
      </div>
    );
  }
}

function PageTag(props) {
  return <button className={[style.navSection, style.navButton].join(" ")}>{props.pageId}</button>;
}
