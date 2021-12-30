import React from "react";
import BoardNavigation from "../../components/boardNavigation/BoardNavigation";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import JobBillboardComponent from "../../components/jobBillboardComponent/JobBillboardComponent";
import SettingsComponent from "../../components/settingsComponent/SettingsComponent";
import styles from "../HomePage/HomePage.module.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderComponent />
        <div className={styles.body}>
          <SettingsComponent />
          <div className={styles.mainContent}>
            <JobBillboardComponent />
            <BoardNavigation />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function Footer() {
  return <div className={styles.Footer}>develop by anfersadu</div>;
}
