import React from "react";
import styles from '../headerComponent/headerComponent.module.css';

export default class HeaderComponent extends React.Component{

  render(){
    return this.displayComponent();
  }

  displayComponent(){
    return(
      <div className={styles.container}>
        <div className = {styles.title}>
          <h1>Github</h1>
          <h3>Jobs</h3>
        </div>
        <div className={styles.banner}>
          <img src={"images/banner.png"} alt="banner"/>
          <form className={styles.searchBar}>
            <input type="text" placeholder="Title, companies, expertise or benefits"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    )

  }

}