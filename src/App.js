import { useState, useEffect } from "react";
import Header from "./component/header"
import SideBar from "./component/sidebar"
import MainContent from "./component/mainContent";

function App() {

  const [ animeList, SetAnimeList] = useState([]);
  const [ TopAnime, SetTopeAnime ] = useState([]);
  const [ SearchAnime, SetAnimeSearch] = useState("");

    const GetTopAnime = async () => {
      const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json ());
      //  SetTopeAnime(temp.data.slice(0,5));
      SetTopeAnime(temp.data.slice(0,5))
}
useEffect(() => {
GetTopAnime();

console.log(TopAnime)

},[])

const handleSearch = (e) => {
  e.preventDefault();

  console.log(SearchAnime)
 FetchAnime(SearchAnime)
}

const FetchAnime = async (query ) => {
const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
.then(res => res.json ());
//  // console.log(temp)
  console.log(temp.data)
  SetAnimeList(temp.data);
 }

//  useEffect(() => {
//   FetchAnime();
  
//   console.log(SearchAnime)
  
//   },[])
  
//  console.log(FetchAnime())
// console.log(GetTopAnime())

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <SideBar topAnime = {TopAnime} 
        />
        <MainContent
        handleSearch={handleSearch}
        search={SearchAnime}
        animeList={animeList}
        SetAnimeSearch={SetAnimeSearch}

        
         />
      </div>
    </div>
  );
}

export default App;
