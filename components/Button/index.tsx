import { Button } from "@mui/material";
import styles from "./styles.module.css";
import { ButtonProps } from "./Models";

export function CustomButton({ title, type, onClick }: ButtonProps) {
  return (
    <Button
      className={`${styles.button} ${
        type === "contained" ? styles.contained : styles.outlined
      }`}
      variant={type}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
