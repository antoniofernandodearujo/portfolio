import { useState } from "react"
import * as S from './styles'
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "react-bootstrap";

interface Repositories {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const MyModal: React.FC = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { isLoading, error, data } = useQuery<Repositories[]>('repositories', async () => {
        try {
            const response = await axios.get('https://api.github.com/users/antoniofernandodearujo/repos');
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch repositories");
        }
    });
    

    if (isLoading) {
        return ( 
            <Spinner />
        )
    }

    if (error) return <p>Error</p>

    const repositories = data as Repositories[]

    return(
        <>
            <S.ButtonOpenModal onClick={handleShow}> + More projects</S.ButtonOpenModal>
           
            <S.StyledModal show={show} onHide={handleClose} centered size="xl">
                    
                <S.StyledModal.Header closeButton>
                    <S.StyledModal.Title>Other Projects</S.StyledModal.Title>
                </S.StyledModal.Header>

                <S.StyledModal.Body>
                    {repositories.map((repository, index) => {
                        return (
                            <S.ContainerModal key={index}>
                                <S.Name>{repository.name}</S.Name>
                                <S.Description>{repository.description}</S.Description>
                                <S.Link href={repository.html_url} target="_blank">to view aplication</S.Link>
                                <S.Seperate />
                            </S.ContainerModal>
                        )   
                    })}
                </S.StyledModal.Body>
               

            </S.StyledModal>
              
        </>
    )
}

export default MyModal