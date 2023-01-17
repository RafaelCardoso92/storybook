import styles from "./section.module.scss";
import Image from "next/image";
interface sectionProps {
  title: string;
  text: string;
  src: any;
  alt: string;
  width: number;
  height: number;
}

export default function Section(props: sectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}
