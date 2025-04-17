import { Box } from '@mui/material';
import styles from './styles.module.css';
import Image from 'next/image';

import Logo from '@/assets/images/logo.svg';

export function Footer() {
    return (
        <footer>
            <Box className={styles.footerContainer}>
                <Box className={styles.footerContent}>
                    <Box className={styles.footerGrid}>
                        <Box>
                            <Image src={Logo} width={167} height={133} alt="Logo" />
                            <p>Lorem ipsum dolor sit amet consectetur. Tellus id tempus eu arcu et senectus pellentesque maecenas ac. Pellentesque tortor posuere faucibus vitae molestie risus. </p>
                        </Box>
                        <Box className={styles.gridMapSite}>
                            <Box>
                                <h3>Navegação</h3>
                                <p>Início</p>
                                <p>Toldos</p>
                                <p>Coberturas</p>
                                <p>Projetos</p>
                                <p>Sobre</p>
                                <p>Blog</p>
                                <p>Orçamento Rápido</p>
                                <p>Fotos</p>
                            </Box>
                            <Box>
                                <h3>Coberturas</h3>
                                <p>Cobertura Termoacústica</p>
                            </Box>
                            <Box>
                                <h3>Toldos</h3>
                                <p>Toldo Articulado<br /> Italiano</p>
                            </Box>
                            <Box>
                                <h3>Contatos</h3>
                                <p>Rua Antônio Aparecido Ferraz, 904 - Sorocaba, SP</p>
                                <p>CEP: 18052-280</p>
                                <p>(15) 9 9285-3236</p>
                                <p>(15) 9 9678-8981</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
}