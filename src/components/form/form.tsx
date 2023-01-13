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
          <div className={styles.formRow}>
            <label htmlFor="name" style={{ color: props.color }}>
              Name:
              <input
                className={`${styles.formInput} ${styles[props.variant]}`}
                data-testid="name"
                name="name"
                type="text"
              />
            </label>
            <label htmlFor="email" style={{ color: props.color }}>
              Email:
              <input
                data-testid="email"
                name="email"
                type="email"
                className={`${styles.formInput} ${styles[props.variant]}`}
              />
            </label>
            <label htmlFor="message" style={{ color: props.color }}>
              Message
              <textarea
                data-testid="message"
                name="message"
                className={`${styles.formInput} ${styles[props.variant]}`}
              />
            </label>
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
