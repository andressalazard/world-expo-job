import styles from "./jobOfferComponent.module.css";
import React from "react";

export default class JobOfferComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.body}>
        <img src={"images/companyImage.png"} alt="company-name" />
        <div className={styles.mainDescription}>
          <h2 className={styles.jobTitle}>Company Name</h2>
          <h1 className={styles.jobPosition}>Work Position</h1>
          <div className={styles.jobDetails}>
            <h5 className={styles.jobType}>FULL TIME</h5>
            <div className={styles.postDetail}>
              <div className={styles.detail}>
                <span class="material-icons">language</span>
                <p>Location</p>
              </div>
              <div className={styles.detail}>
                <span class="material-icons">schedule</span>
                <p>Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
