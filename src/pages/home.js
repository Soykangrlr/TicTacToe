import { Link } from "react-router-dom";
import Card from "../components/card/card";
function Home() {

  return (
    
        <>
        
            <p className="heading">TIC TAC TOE</p>
            <div className="card-group">
              <div className="Card-link-div">
            <Link className="Card-link"  to="game/computer"><Card title1="PLAYER" title2="COMPUTER" bg="#CD853F"/></Link>

              </div>
              <div className="Card-link-div">
              <Link className="Card-link" to="game/two"><Card title1="PLAYER 1" title2="PLAYER 2" bg="#66CDAA"/></Link>

              </div>
            </div>
        </>
  )
}
export default Home