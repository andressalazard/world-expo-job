import React from "react";
import styles from "./settingsComponent.module.css";

export default class SettingsComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <div className={styles.body}>
      <form className= {styles.searchForm}>
        <div className={styles.searchCriteria}>
          <div className={styles.criteriaOption}>
            <div className={styles.criteriaHeader}>FILTER</div>
              <div className={styles.childOption}>
                <input type="checkbox" id="fTimeFilter" value= "fTime"/>
                <label for= "fTimeFilter">Full Time</label>
              </div>
          </div>

          <div className={styles.criteraOption}>
            <div className={styles.criteriaHeader}>SEARCHBAR</div>
              <input type="text" placeholder="City, state, zip code or country"/>
          </div>

          <div className={styles.criteriaOption}>
            <div className={styles.criteriaHeader}>LOCATIONS</div>
              <div className={styles.childOption}>
                <input type="radio" id="1" name="option1" value="option1" checked/>
                <label for="1">LONDON</label>
              </div>
              <div className={styles.childOption}>
                <input type="radio" id="2" name="option2" value="option2"/>
                <label for="2">LONDON</label>
              </div>
              <div className={styles.childOption}>
                <input type="radio" id="3" name="option3" value="option3"/>
                <label for="3">LONDON</label>
              </div>
              <div className={styles.childOption}>
                <input type="radio" id="4" name="option4" value="option4"/>
                <label for="4">LONDON</label>
              </div>
          </div>

        </div>
        <button>GO SEARCH!</button>
      </form>            
    </div>)
  }
}