/* eslint-disable jsx-a11y/alt-text */
import styles from "./Challenge1.module.scss";
import flagEnglandImg from "./flag-england.png";
import flagUAEImg from "./flag-uae.png";
import flagJapanImg from "./flag-japan.png";

export const FlagOfJapan: React.FC = () => {
  return (
  <div className={styles.FlagOfJapan}>
    <div className={styles.FlagOfJapanInnerDiv}></div>
  </div>
  );
  
};

export const FlagOfEngland: React.FC = () => {
  return <div className={styles.FlagOfEngland}>
    <div className={styles.FlagOfEnglandInnerDiv1}></div>
    <div className={styles.FlagOfEnglandInnerDiv2}></div>
  </div>;
};

export const FlagOfUAE: React.FC = () => {
  return <div className={styles.FlagOfUAE}>
    <div className={styles.FlagOfUAEInnerDiv1}></div>
    <div className={styles.FlagOfUAEInnerDiv2}></div>
    <div className={styles.FlagOfUAEInnerDiv3}></div>
    <div className={styles.FlagOfUAEInnerDiv4}></div>
  </div>;
};

export const Challenge1: React.FC = () => {
  return (
    <div className={styles.Challenge1}>
      <h2>Challenge 1</h2>
      <h3>Flags</h3>
      <div>
        This challenge exercises your CSS skills.
        <ul>
          <li>Implement the specified flags.</li>
          <li>Use modern and clean CSS layout methods where possible.</li>
          <li>
            The colors or exact proportions of each flag can be approximated -
            no need to make them perfect.
          </li>
        </ul>
      </div>
      <h3>Discussion</h3>
      <div>
        <ul>
          <li>
            Suppose this was a requirement asked of you in order to display
            various flags on a website. What kind of considerations would you
            have when implementing these?
          </li>
        </ul>
      </div>
      <h3>Reference</h3>
      <img className={styles.flagExample} src={flagJapanImg} />
      <img className={styles.flagExample} src={flagEnglandImg} />
      <img className={styles.flagExample} src={flagUAEImg} />
      <h3>Implementation</h3>
      <div className={styles.flagContainer1}>
        <FlagOfJapan></FlagOfJapan>
      </div>
      <div className={styles.flagContainer1}>
        <FlagOfEngland></FlagOfEngland>
      </div>
      <div className={styles.flagContainer1}>
        <FlagOfUAE></FlagOfUAE>
      </div>
    </div>
  );
};
