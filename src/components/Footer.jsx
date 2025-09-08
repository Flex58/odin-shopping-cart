import classes from "../css/Footer.module.css";

function Footer() {
  return (
    <div className={classes.wrapper}>
      <div>
        <div className={classes.item}>
          <i>email</i>
          <p>totally-real-shop@gmail.com</p>
        </div>
        <div  className={classes.item}>
          <i>telephon</i>
          <p>1-800-REALSHOP</p>
        </div>
        <div  className={classes.item}>
          <i>address</i>
          <p>Real Shop Av. 8100 Shop State</p>
        </div>
      </div>
      <p>&copy; Totally Real Shop corp.</p>
    </div>
  );
}

export default Footer;
