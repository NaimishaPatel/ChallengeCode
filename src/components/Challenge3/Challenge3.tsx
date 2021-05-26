import styles from "./Challenge3.module.scss";

export const Solution: React.FC = () => {
  return (
    <>
      <button>CLICK ME</button>
      <div>Counter: TODO</div>
      <div>fizzbuzz</div>
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
            and "buzz", both are numbers. If you can use TypeScript,{" "}
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
