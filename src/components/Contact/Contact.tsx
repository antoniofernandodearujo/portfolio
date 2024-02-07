import * as S from './styles';
import { NavigationProps } from '@/utils/navigation';

const Contact: React.FC<NavigationProps> = ({ id }) => {
    return (
        <S.ContactContainer id={id}>
            <S.Title> Contact </S.Title>

            <S.CardTextContact>
                <S.Text>Want to contact me ? Feel free to send me a message on one of my social networks below.</S.Text>
                <S.ContainerContact>
                    <S.TextContact target="_blank" href="mailto:afas@academico.ufpb.br">Email</S.TextContact>
                    <S.TextContact target="_blank" href="https://www.linkedin.com/in/antonio-fernando-8a2385235/">Linkedin</S.TextContact>
                    <S.TextContact target="_blank" href="https://api.whatsapp.com/send?phone=5581996369965">Whatsapp</S.TextContact>
                </S.ContainerContact>
            </S.CardTextContact>

        </S.ContactContainer>
    );
}

export default Contact;