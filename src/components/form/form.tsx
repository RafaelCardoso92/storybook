import styles from "./form.module.scss";
import Button from "../button/button";
interface formProps {
  variant: string;
  borderColor: string;
  color: string;
}

export default function Form(props: formProps) {
  const submitHandler = () => {
    if (props.variant === "primary") {
      alert("This is a primary button");
      //my special error
      //props.variant = "something";
    } else if (props.variant === "secondary") {
      alert("This is a secondary button");
    }
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
        <form onSubmit={submitHandler}>
          <div className={`${styles.formRow} ${styles[props.variant]}`}>
            <label htmlFor="name">First Name:</label>
            <input name="name" type="text" className={styles.formInput} />
            <label htmlFor="lname">Last Name:</label>
            <input name="lname" type="text" className={styles.formInput} />
            <label htmlFor="email">Email:</label>
            <textarea name="email" className={styles.formInput} />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Button
                type="submit"
                variant="secondary"
                size="small"
                text="Send Email"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Form.defaultProps = {};
