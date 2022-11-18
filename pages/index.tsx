import * as S from "../styles/home";
import { useState } from "react";
// import { } from 'chart.js'
// import {Doughnut} from 'react-chartjs-2';
import axios from "axios";
type typeUser = {
  name: string;
  email: string;
};

export default function Home() {
  // const [fetching, setFetching] = useState("");
  const [user, getUser] = useState<string | null>(null);
  const [data, setData] = useState<object | null>(null);
  const [urlAvatar, setUrlAvatar] = useState<any>(null);

  const followers = data?.data?.followers;
  const following = data?.data?.following;



  const formatedDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  async function handleAvatar() {
    if (user?.length < 0) return;
    const response = await axios.get(`https://api.github.com/users/${user}`);
    try {
      console.log("URL", data?.data?.avatar_url);
      console.log(response.data);

      setData(response);
      console.log(response?.data?.followers);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <S.HomeContainer>
      <S.ContainerSearch>
        <S.SearchInput
          placeholder="Search"
          type="text"
          onChange={(e) => getUser(e.target.value)}
        />
        <S.SearchButton type="submit" onClick={() => handleAvatar()}>
          Search
        </S.SearchButton>
      </S.ContainerSearch>
      <S.ContainerPerfil>
        <S.ContainerAvatar>
          {data ? <S.PerfilAvatar src={data?.data?.avatar_url} /> : null}
          <S.ContainerDescription>
            <S.Perfil>
              <S.PerfilName>{data?.data?.name}</S.PerfilName>
              <S.UserName> {data ? `@${data?.data?.login}` : null}</S.UserName>
            </S.Perfil>
            <S.CreateAt>
              {data
                ? `Criado em: ${formatedDate(data?.data?.created_at)}`
                : null}
            </S.CreateAt>
          </S.ContainerDescription>
        </S.ContainerAvatar>
        <S.ContainerRepositories>
          <S.RepositoriesCard>
            {data ? (
              <>
                <S.RepositoriesNumber>
                  {data?.data?.public_repos}
                </S.RepositoriesNumber>
                <S.RepositoriesName>Repositorios públicos</S.RepositoriesName>
              </>
            ) : null}
          </S.RepositoriesCard>
        </S.ContainerRepositories>
        {/* <Doughnut data={Data} height="50" width="50"></Doughnut> */}
      </S.ContainerPerfil>
    </S.HomeContainer>
  );
}
