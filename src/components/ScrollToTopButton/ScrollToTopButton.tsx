import * as S from './styles';
import { CaretUpFill } from 'react-bootstrap-icons'

type ScrollToTopButtonProps = {
    show: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ show }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <S.ContainerButton>
            <S.ScrollToTopButton onClick={scrollToTop} style={{ display: show ? 'block' : 'none' }}>
                <CaretUpFill color='#ffffff' size={25}/>
            </S.ScrollToTopButton>
        </S.ContainerButton>
    );
}

export default ScrollToTopButton;