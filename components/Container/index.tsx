import styles from './styles.module.css';
import { Container as ContainerScreen } from '@mui/material';

export function Container({ children }: { children: React.ReactNode }) {
    return (
        <ContainerScreen className={styles.container}>
            {children}
        </ContainerScreen>
    );
}