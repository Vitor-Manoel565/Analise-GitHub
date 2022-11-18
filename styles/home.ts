import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 100vh;
  width: 100vw;
  background-color: #141c2f;
  color: white;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 8vh;
  width: 50vw;
  background-color: #1f2a48;
  color: white;
  font-size: calc(10px + 2vmin);
  text-align: center;
  border-radius: 20px;
`;

export const SearchButton = styled.button`
  height: auto;
  width: auto;
  padding: 5px;
  background-color: #c93756;
  color: white;
  font-size: 20px;
  text-align: center;
  /* border-radius: 20px ; */
  border: 1px solid #c93756;
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`;

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 50vh;
  width: 50vw;
  gap: 2rem;
  background-color: #1f2a48;
  color: white;
  font-size: calc(10px + 2vmin);
  text-align: center;
  border-radius: 20px;
  padding: 25px;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  height: 15vh;
  width: 100%;
  gap: 3rem;
  padding: 20px;
  /* background-color: blue; */
  color: white;
  font-size: calc(10px + 2vmin);
  text-align: center;
  border-radius: 20px;
`;

export const PerfilAvatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: aliceblue;
`;

export const SearchInput = styled.input`
  height: 5vh;
  width: 100%;
  background-color: #1f2a48;
  color: white;
  font-size: calc(10px + 2vmin);
  text-align: center;
  border: none;
  outline: none;
`;

export const ContainerDescription = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  /* justify-content: center; */
  height: auto;
  width: 100%;
  background-color: #1f2a48;
  color: white;
  font-size: calc(10px + 2vmin);
`;


export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
`;

export const PerfilName = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;

export const CreateAt = styled.figcaption`
    font-size: 15px;
    font-weight: 400;
    color: white;
`;

export const UserName = styled.figcaption`
    font-size: 15px;
    font-weight: 400;
    color: #c93756;
`;

export const ContainerRepositories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    background-color: #1f2a48;
    color: white;
    font-size: calc(10px + 2vmin);
    text-align: center;
    border-radius: 20px;
    padding: 25px;
`;

export const RepositoriesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 50%;
    background-color: #c93756;
    color: white;
    font-size: calc(10px + 2vmin);
    text-align: center;
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 20px;
`;

export const RepositoriesNumber = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: white;
`;

export const RepositoriesName = styled.figcaption`
    font-size: 15px;
    font-weight: 400;
    color: white;
`;