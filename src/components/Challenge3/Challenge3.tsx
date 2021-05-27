import { useState } from 'react';
import styles from "./Challenge3.module.scss";

export const Solution: React.FC = () => {
  let fizz = 3, buzz = 5;
  const [counter, setCounter] = useState(0)
  const handleCounter = () => {
    setCounter(counter + 1)
  }
  const fizzbuzzDisplay = () => {
   if (counter === 0) {
      return counter
    } else if (counter % fizz === 0 && counter % buzz === 0) {
      return 'fizzbuzz'
    } else if (counter % fizz===0) {
      return 'fizz'
    } else if (counter % buzz === 0) {
      return 'buzz'
    }  else {
      return counter;
    }
  }
  return (
    <>
      <button onClick={handleCounter}>CLICK ME</button>
      <div >Counter: TODO</div>
      <div>{fizzbuzzDisplay()}</div>
    </>
  );
};

export const Challenge3: React.FC = () => {
  return (
    <div className={styles.Challenge3}>
      <h2>Challenge 3</h2>
      <h3>FizzBuzz</h3>
      <div>
        This challenge exercises your React component development skills.
        <ul>
          <li>
            Your Solution component needs to be modified to take 2 props: "fizz"
            and "buzz", both are numbers. If you can use TypeScript, please do so where appropriate.
          </li>
          <li>Clicking the button below should update the counter +1.</li>
          <li>
            If the counter is divisible by your prop "fizz", the component
            should also output the word "fizz".
          </li>
          <li>
            If the counter is divisible by your prop "buzz", the component
            should also output the word "buzz".
          </li>
          <li>
            If the counter is divisible by both X and Y, the component should
            output "fizzbuzz" together.
          </li>
          <li>Implement your solution entirely within this file.</li>
        </ul>
      </div>
      <h3>Implementation</h3>
      <Solution />
    </div>
  );
};
