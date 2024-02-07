import * as S from './styles'

const Navbar: React.FC = () => {
    
    return (
        <S.NavBar expand="lg">
            <S.ContainerImageAndName>
                
                <S.ImageProfile
                    src="/assets/Group.png"
                    alt="logo-tipo"
                    loading="lazy"
                    width={50}
                    height={50}
                    layout='fixed'
                />
                
                <S.Name>Antônio Fernando</S.Name>
            </S.ContainerImageAndName>
            <S.NavBarToggle aria-controls="basic-navbar-nav" />
            <S.NavBarCollapse id="basic-navbar-nav">
                <S.ContainerLinksAndButton>
                    <S.MyNav className="ml-auto">
                        <S.MyNavlink href="#home">Home</S.MyNavlink>
                        <S.Separate />
                        
                        <S.MyNavlink href="#projects">Projects</S.MyNavlink>
                        <S.Separate />

                        <S.MyNavlink href="#about">About</S.MyNavlink>
                        <S.Separate />

                        <S.MyNavlink href="#contact">Contact</S.MyNavlink>
                        
                        
                    </S.MyNav>
                </S.ContainerLinksAndButton>
            </S.NavBarCollapse>
        </S.NavBar>
    );
};

export default Navbar;
