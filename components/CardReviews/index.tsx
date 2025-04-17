import Image from "next/image"
import Car from "@/assets/images/car.svg"

import styles from "./styles.module.css"
import { Box, Rating } from "@mui/material";
import { CardReviewsProps } from "./Models";

import PersonPin from '@/assets/icons/person_pin.svg';

export function CardReviews({ dataReview, image, name, rating, textReview }: CardReviewsProps) {
    return (
        <Box className={styles.cardReview}>
            <img 
                src={image ? image : PersonPin}
                className={styles.cardProductImage}
                width={100}
                height={100}
                alt="Imagem de um usuário do google"
            />
            <Box className={styles.contentReview}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.dateReview}>{dataReview}</p>
                <Rating
                    name="readOnly"
                    value={rating}
                    readOnly
                />
                <p className={styles.textReview}>{textReview}</p>
            </Box>
        </Box>
    );
}