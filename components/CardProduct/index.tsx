import Image from "next/image"
import Car from "@/assets/images/car.svg"

import styles from "./styles.module.css"
import { Box } from "@mui/material";
import { CustomButton as Button } from "@/components/Button";
import { CardProductProps } from "./Models";

export function CardProduct({ title, description }: CardProductProps) {
    return (
        <div className={styles.cardProductImage}>
            <Image 
                src={Car}
                className={styles.cardProductImage}
                alt="Imagem de um produto"
            />
            <h3 className={styles.titleCard}>{title}</h3>
            <p className={styles.subtitleCard}>{description}</p>
            <Box className={styles.contentButton}>
                <Button title="Saiba Mais" type="contained" />
            </Box>
        </div>
    );
}