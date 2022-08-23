import Game from "../components/game/game"
import {  useParams,Link } from 'react-router-dom';
import Error from "./error";
function GamePage() {
  let { id } = useParams();
 
  if(!( id =="computer"||  id=="two")){
    return (
      <Error/> 
    )
  }
  return (
    <>
      <Link className="home-button" to="/">
      <img src="../home.png" />
      </Link>
     <Game id={id}/>
     </>
 
  )
}
export default GamePage