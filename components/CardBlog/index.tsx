import Image from "next/image"
import Blog from "@/assets/images/blog.svg"

import styles from "./styles.module.css"
import { Box } from "@mui/material";
import { CustomButton as Button } from "@/components/Button";
import { CardBlogProps } from "./Models";

export function CardBlog({ title }: CardBlogProps) {
    return (
        <Box className={styles.cardBlog}>
            <Image 
                src={Blog}
                alt="Imagem de uma informação do blog"
            />
            <h3 className={styles.titleCard}>{title}</h3>
            <Box className={styles.contentButton}>
                <Button title="Leia mais" type="outlined" />
            </Box>
        </Box>
    );
}