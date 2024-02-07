// Header.tsx
import * as S from './styles';
import { Linkedin, Github, EnvelopeFill, Whatsapp } from 'react-bootstrap-icons';
import Image from 'next/image';
import { NavigationProps } from '@/utils/navigation';

const Header: React.FC<NavigationProps> = ({ id }) => {
  return (
    <S.ContainerHeader id={id}>
        <Image src="/assets/fernando.png" style={{ borderRadius: '50%' }} alt="image" width={105} height={105} loading='lazy' />
        <S.ContentTextAndBall>
            <S.Availability>Available for Opportunities </S.Availability>
            <S.Ball />
        </S.ContentTextAndBall>
        <S.Title>Hello, I&apos;m Fernando</S.Title>

        <S.ContainerIcons>
            <S.Icon target="_blank" href="https://www.linkedin.com/in/antonio-fernando-8a2385235/">
              <Linkedin size={25} color='#445964' />
            </S.Icon>
            <S.Icon target="_blank" href="https://github.com/antoniofernandodearujo">
              <Github size={25} color='#445964' />
            </S.Icon>
            <S.Icon target="_blank" href="mailto:afas@academico.ufpb.br">
              <EnvelopeFill size={25} color='#445964' />
            </S.Icon>
            <S.Icon target="_blank" href="https://api.whatsapp.com/send?phone=5581996369965">
              <Whatsapp size={25} color='#445964' />
            </S.Icon>
      </S.ContainerIcons>
    </S.ContainerHeader>
  );
};

export default Header;
