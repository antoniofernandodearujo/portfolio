import * as S from './styles';
import { ListProjects } from "./listProjects";
import Card from "react-bootstrap/Card";
import MyModal from "../Modal/MyModal";
import { NavigationProps } from '@/utils/navigation';

const Cards: React.FC<NavigationProps> = ({ id }) => {
    
    return (
        <S.ContainerCards>
            <S.Title id={id}>Projects</S.Title>

            <S.ContentCards>
            {
                ListProjects.map((project, index) => {
                    return (
                        <S.MyCard key={index}>
                            <Card.Header>
                                <S.MyCardTitle>{project.title}</S.MyCardTitle>
                            </Card.Header>
                            <Card.Body>
                                <S.MyCardText>
                                    {project.description}

                                    <br/><br/>

                                    
                                </S.MyCardText>

                            </Card.Body>

                            <Card.Footer>
                                <S.MyCardLink href={project.link} target="_blank">to view aplication</S.MyCardLink>
                            </Card.Footer>

                        </S.MyCard>
                    )
                })
            }
            
            </S.ContentCards>

            <S.ContentButtonModal>
                <MyModal />
            </S.ContentButtonModal>
        </S.ContainerCards>
    )
}

export default Cards