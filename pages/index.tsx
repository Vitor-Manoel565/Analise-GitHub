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
  const [user, getUser] = useState<string>("");
  const [data, setData] = useState<object | null>(null);
  const [followers, setFollowers] = useState<object | null>(null);
  const [following, setFollowing] = useState<object | null>(null);
  const [name, setName] = useState<string>("");
  const [loginName, setLoginName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [repos, setRepos] = useState<string>("");
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
      setData(response);
      setFollowers(response?.data?.followers);
      setFollowing(response?.data?.following);
      setName(response?.data?.name);
      setLoginName(response?.data?.login);
      setDate(formatedDate(response?.data?.created_at));
      setRepos(response?.data?.public_repos);
      setUrlAvatar(response?.data?.avatar_url);
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
          {urlAvatar.length > 0 ? <S.PerfilAvatar src={urlAvatar} /> : null}
          
            <S.Perfil>
              <S.PerfilName>{name}</S.PerfilName>
              <S.UserName> {loginName.length > 0 ? `@${loginName}` : null}</S.UserName>
            </S.Perfil>
            <S.CreateAt>
              {date.length > 0
                ? `Criado em: ${date}`
                : null}
            </S.CreateAt>
         
        </S.ContainerAvatar>
        <S.ContainerRepositories>
          <S.RepositoriesCard>
            {repos.length > 0 ? (
              <>
                <S.RepositoriesNumber>
                  {repos}
                </S.RepositoriesNumber>
                <S.RepositoriesName>Repositorios públicos</S.RepositoriesName>
              </>
            ) : null}
          </S.RepositoriesCard>
        {followers && following ? (
          <S.ContainerGraph>
            <Doughnut data={dataDoughnut} height="100" width="100"></Doughnut>
          </S.ContainerGraph>
        ) : null}
        </S.ContainerRepositories>
      </S.ContainerPerfil>
    </S.HomeContainer>
  );
}
