import {
    Routes,
    Route,
  } from "react-router-dom";
import Error from "./error";
import GamePage from "./gamePage";
import Home from "./home";
function Index() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="game/:id" element={<GamePage/>}/>
    <Route path="*" element={<Error/>}/>

     
   
  </Routes>
  )
}
export default Index