

//Vamos a importar los estilos y el componente InfoCard
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"    
import "./App.css"


export function App () {
  return (
    <div>
      <h1>App</h1>
      <InfoCard/>
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/581.jpeg" 
      userName="Anchoshake"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/573.jpeg" 
      userName="Shake hitler"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/529.jpeg" 
      userName="Lizard"
      />
      <UserCard 
      image="https://rickandmortyapi.com/api/character/avatar/619.jpeg" 
      userName="Professor Sanchez"
      />
       
      <h1>App</h1>
      <InfoCard/>
      <UserCard 
      image="https://i.ebayimg.com/images/g/LCoAAOSwD5ZksbxH/s-l1200.jpg" 
      userName="YHLQMDLG"
      />
      <UserCard 
      image="https://akamai.sscdn.co/uploadfile/letras/albuns/a/e/4/0/742631571236401.jpg" 
      userName="OASIS"
      />
      <UserCard 
      image="https://http2.mlstatic.com/D_NQ_NP_613672-MLU78308065582_082024-O.webp" 
      userName="X100PRE"
      />
      <UserCard 
      image="https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/12/16971477116771.jpg" 
      userName="Nadie Sabe Lo Que Va A Pasar Mañana"
      />
          
    </div>

  )
}
