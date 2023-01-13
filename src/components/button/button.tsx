import styles from "./button.module.scss";

interface buttonProps {
  variant: string;
  size: string;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export default function Button(props: buttonProps) {
  return (
    <div className={styles.container}>
      <button
        onClick={props.onClick}
        type={props.type}
        className={`${styles[props.variant]} ${
          props.size ? styles[props.size] : ""
        } `}
      >
        {props.text}
      
    </div>
  );
}

Button.defaultProps = {
  variant: "",
  size: "",
};
