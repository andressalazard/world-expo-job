import React from "react";
import styles from '../headerComponent/headerComponent.module.css';

export default class HeaderComponent extends React.Component{

  render(){
    return this.displayComponent();
  }

  displayComponent(){
    return(
      <div className={styles.container}>
        <h1><strong>Github</strong> Jobs</h1>
        <div className={styles.banner}>
          Here goes the banner and search bar
        </div>
      </div>
    )

  }

}