import React from "react";
import styles from "./Mission.module.scss"; // Import your SCSS module

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Mission = () => {
  return (
    <>
      <Navbar />
      <div className={styles["mission-container"]}>
        <h2 className={styles["mission-heading"]}>Our Mission</h2>
        <p className={styles["mission-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Integer malesuada nunc vel risus commodo viverra maecenas. Tristique senectus et netus et malesuada fames. Risus at ultrices mi tempus imperdiet nulla. Nunc aliquet bibendum enim facilisis gravida neque. Est velit egestas dui id ornare arcu. Eget mauris pharetra et ultrices neque ornare. Orci phasellus egestas tellus rutrum. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Viverra accumsan in nisl nisi scelerisque eu. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. At lectus urna duis convallis convallis tellus id. Congue eu consequat ac felis donec et odio. Senectus et netus et malesuada fames ac. Eget sit amet tellus cras adipiscing enim. Justo eget magna fermentum iaculis. Mi bibendum neque egestas congue quisque egestas diam. Tellus molestie nunc non blandit massa enim nec dui nunc.</p>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
