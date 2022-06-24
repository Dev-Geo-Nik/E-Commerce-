import React from 'react';
import "../assets/css/main.scss";
import * as Styles from "./test.module.scss";
const  Test :React.FC = () => {

  return (
<>
    <p className={Styles.test}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, ab.</p>
    <p className={Styles.test2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, ab.</p>

  
</>
);
};

export default Test;