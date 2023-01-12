import styles from "./button.module.scss";

interface buttonProps {
  variant: string;
  size: string;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: buttonProps) {
  return (
    <div className={styles.container}>
      <button
        type={props.type}
        className={`${styles[props.variant]} ${
          props.size ? styles[props.size] : ""
        } `}
      >
        {props.text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  variant: "",
  size: "",
};
