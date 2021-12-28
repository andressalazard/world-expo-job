import styles from "./jobBillboardComponent.module.css";
import React from "react";
import JobOfferComponent from "../jobOfferComponent/JobOfferComponent";

export default class JobBillboardComponent extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <JobOfferComponent />
        <JobOfferComponent />
        <JobOfferComponent />
        <JobOfferComponent />
      </div>
    );
  }
}
