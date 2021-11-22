import React from 'react';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import styles from '../HomePage/HomePage.module.css';

export default class HomePage extends React.Component{


  render(){
    return(
      <div className={styles.container}>
        <HeaderComponent/>


      </div>
    );
  }


}


