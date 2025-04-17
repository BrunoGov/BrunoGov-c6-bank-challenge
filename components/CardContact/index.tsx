import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";

import Location from "@/assets/icons/location.svg";
import HeadPhone from "@/assets/icons/headphone.svg";
import Clock from "@/assets/icons/clock.svg";

export function CardContact({ title, subtitle, typeCard }: CardContactProps) {
    return (
        <Box className={styles.cardContact}>
            <Box className={styles.contentIcon}>
                {typeCard === "location" && (
                    <Image src={Location} alt="ícone de localização" /> 
                )}
                {typeCard === "phone" && (
                    <Image src={HeadPhone} alt="ícone de um fone de ouvido" /> 
                )}
                {typeCard === "clock" && (
                    <Image src={Clock} alt="ícone de relógio" /> 
                )}
            </Box>
            <Box className={styles.contentText}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.subtitle}>{subtitle}</p>
            </Box>
        </Box>
    );
}