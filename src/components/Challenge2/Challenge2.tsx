import styles from "./Challenge2.module.scss";

export const Solution: React.FC = () => {
  return (
    <>
      <button>CLICK ME</button>
      <div>Last Click Time: TODO</div>
    </>
  );
};

export const Challenge2: React.FC = () => {
  return (
    <div className={styles.Challenge2}>
      <h2>Challenge 2</h2>
      <h3>Double Click</h3>
      <div>
        This challenge exercises your React component development skills.
        <ul>
          <li>
            Clicking the button below should update the div with the time of the
            last click. The time can be displayed in any format.
          </li>
          <li>
            If the user clicks the button then it should pop up a notification
            saying that the button was clicked.
          </li>
          <li>The notification should disappear after 3 seconds.</li>
          <li>The notification should be made reusable.</li>
          <li>
            Implement your solution entirely within this Challenge folder
            (Challenge2).
          </li>
        </ul>
      </div>
      <h3>Discussion</h3>
      <div>
        <ul>
          <li>
            What are the considerations for making this notification component
            reusable?
          </li>
        </ul>
      </div>
      <h3>Further Enhancement (after initial implementation)</h3>
      <div>
        <ul>
          <li>
            Change the single click to instead react only a double-click within
            500ms.
          </li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <Solution />
    </div>
  );
};
