import * as S from "../styles/home";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
ChartJS.register(ArcElement);
import axios from "axios";
type typeUser = {
  name: string;
  email: string;
};

export default function Home() {
  // const [fetching, setFetching] = useState("");
  const [user, getUser] = useState<string | null>(null);
  const [data, setData] = useState<object | null>(null);
  const [followers, setFollowers] = useState<object | null>(null);
  const [following, setFollowing] = useState<object | null>(null);
  const [urlAvatar, setUrlAvatar] = useState<any>(null);


  const dataDoughnut = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [followers, following],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 2,
      },
    ],
  };

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
      setFollowers(response?.data?.followers);
      setFollowing(response?.data?.following);
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
          
            <S.Perfil>
              <S.PerfilName>{data?.data?.name}</S.PerfilName>
              <S.UserName> {data ? `@${data?.data?.login}` : null}</S.UserName>
            </S.Perfil>
            <S.CreateAt>
              {data
                ? `Criado em: ${formatedDate(data?.data?.created_at)}`
                : null}
            </S.CreateAt>
         
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
        {data ? (
          <S.ContainerGraph>
            <Doughnut data={dataDoughnut} height="100" width="100"></Doughnut>
          </S.ContainerGraph>
        ) : null}
        </S.ContainerRepositories>
      </S.ContainerPerfil>
    </S.HomeContainer>
  );
}
