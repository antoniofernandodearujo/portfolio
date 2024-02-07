import * as S from './styles';
import { NavigationProps } from '@/utils/navigation';

const About: React.FC<NavigationProps> = ({ id }) => {
    return (
        <S.MyContainer id={id}>
            <S.Title>About</S.Title>
            <S.MyCard>
                <S.MyCardText>
                    Passionate software developer since 2020, 
                    I thrive in web development, enjoying basketball, movies, and quality time with friends over drinks.
                    🏀🎬🍻 Oh, and coffee is my coding companion, adding energy and inspiration to my daily routine.
                    ☕️
                    Thriving in a web development internship since 2020, I&apos;ve built systems from scratch, embracing the ever-evolving tech landscape. Eager for challenges, I&apos;m committed to staying updated on the latest advancements, excited about evolving as a developer and contributing to innovative projects. 💻✨
                </S.MyCardText>
            </S.MyCard>
        </S.MyContainer>
    );
}

export default About;
