import styles from "./form.module.scss";
import Button from "../button/button";
import { useState } from "react";
interface formProps {
  variant: string;
  borderColor: string;
  color: string;
}

export default function Form(props: formProps) {
  const [details, setDetails] = useState(false);
  const submitHandler = () => {
    console.log("Email sent");
    setDetails(true);
    //my special error
    //props.variant = "something";
  };
  return (
    <div
      style={{ borderColor: props.borderColor }}
      className={`${styles.container} ${styles[props.borderColor]}`}
    >
      <div className={styles.formHeader} style={{ color: props.color }}>
        <h1>Form</h1>
      </div>
      <div className={styles.formBody}>
        <div>
          <div className={`${styles.formRow} ${styles[props.variant]}`}>
            <label htmlFor="name">Name:</label>
            <input
              data-testid="name"
              name="name"
              type="text"
              className={styles.formInput}
            />
            <label htmlFor="email">Email:</label>
            <input
              data-testid="email"
              name="email"
              type="email"
              className={styles.formInput}
            />
            <label htmlFor="message">Message</label>
            <textarea
              data-testid="message"
              name="message"
              className={styles.formInput}
            />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Button
                onClick={submitHandler}
                data-testid="submit"
                type="submit"
                variant="secondary"
                size="small"
                text="Send Email"
              />
            </div>
          </div>
          {details === true ? <p>Email sent</p> : ""}
        </div>
      </div>
    </div>
  );
}

Form.defaultProps = {};
