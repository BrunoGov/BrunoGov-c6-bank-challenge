import Image from 'next/image';
import styles from './styles.module.css';
import Logo from '@/assets/images/logo.svg'
import { Box, Button, Divider, Drawer, IconButton, List, ListItem } from '@mui/material';
import { useState } from 'react';

import CloseIcon from '@/assets/icons/close.svg';
import MenuIcon from '@/assets/icons/menu.svg';

export function Header() {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <header className={styles.header}>
            <Box className={styles.menuDesktop}>
                <Image 
                    src={Logo}
                    alt="Logo"
                    className={styles.logo}
                />
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/">Toldos</a></li>
                        <li><a href="/">Cobertura</a></li>
                        <li><a href="/">Projetos</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/">Fotos</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Orçamento</a></li>
                    </ul>
                </nav>
            </Box>
            <Box className={styles.menuMobile}>
                <Box className={styles.menuMobileContent}>
                    <Image 
                    src={Logo}
                    alt="Logo"
                    className={styles.logo}
                    width={50}
                    height={50}
                    />
                    <IconButton onClick={handleDrawerToggle} aria-label="menu">
                        <Image src={MenuIcon} alt="ícone de um menu" width={20} height={20} />
                    </IconButton>
                </Box>
            </Box>
            <Drawer open={open}>
                <IconButton className={styles.iconButtonDrawer} onClick={handleDrawerToggle} aria-label="close">
                    <Image src={CloseIcon} alt="ícone de fechar" />
                </IconButton>
                <List sx={{ width: 250, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Início</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Toldos</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Cobertura</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Projetos</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Sobre</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Fotos</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Blog</Button>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem alignItems="flex-start">
                        <Button className={styles.buttonDrawer} variant="text">Orçamento</Button>
                    </ListItem>
                </List>
            </Drawer>
        </header>
    );
}