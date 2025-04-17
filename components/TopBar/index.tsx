import { Box } from '@mui/material';
import styles from './styles.module.css';
import Image from 'next/image';

import Maker from '@/assets/icons/maker.svg';

export function TopBar() {
    return (
        <Box className={styles.topBarContainer}>
          <Box className={styles.content}>
            <Box className={styles.address}>
                <Image src={Maker} className={styles.iconMaker} alt="ícone de marcador no mapa" />
                <p>Avenida dos Palmares, 234, Bairro monte mor</p>
            </Box>
          </Box>
        </Box>
    );
}