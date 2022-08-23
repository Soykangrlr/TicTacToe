import { useEffect, useState } from "react";
import { Winnercheck, TieCheck } from "../../helpers/winnerCheck";
import ComputerMove from "../../helpers/computerMove";
import Box from "../box/box";

function Game({id}) {
  // X ve O değerlerinini  sakladım 
  const x="../sword"
  const o="../shield"
  const [currentPlayer, setCurrentPlayer] = useState(x);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);
  const [lighted, setLigthed] = useState([]);
  const [playComputer, setPlayComputer] = useState(false);
  
 
  //Computer Saırasına göre method alıştırıldı
  useEffect(()=>{
    if(playComputer){
        handleComputer()
    }
  },[playComputer])
  // computerMove dana gelen indexe o yazıldı ve kazanakontrol edildi.
  const handleComputer=()=>{
 const index =ComputerMove(board)
 console.log(index);
 const newBoard = [...board];
 newBoard[index] = currentPlayer;
setBoard(newBoard);
 setPlayComputer(prev=> !prev)
 let win = Winnercheck(newBoard);
      if (win) {
        setWinner(currentPlayer);
        setLigthed(win);
      } else {
        
        setTie(TieCheck(newBoard));
        setCurrentPlayer(prev=>prev===x?o:x)
      } 

  }
  // Player Method
  const handleBox = (index) => {
    // eğer kazanan veya box doluysa disable yapıldı
    if (winner || board[index]) {
      return;
    } else {
      // gelene index tahataya yazıldı
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
     setBoard(newBoard);
      // Kazana Kontrol
      let win = Winnercheck(newBoard);
      if (win) {
        setWinner(currentPlayer);
        setLigthed(win);
      } else {
        setTie(TieCheck(newBoard));
        setCurrentPlayer(prev=>prev===x?o:x)
        // Eğer Computer varsa bilgisayar oynucak eğer yoksa 2. Oyuncu oynayacaka
        if(id==="computer"){
            setPlayComputer(prev=> !prev)
        }
      }
    }
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(x);
    setWinner(null);
    setLigthed([]);
    setTie(false)
  };
  // Box Fonksiyon oluşturuldu
  const getBox = (index) => {
    return (
      <Box
        value={board[index]}
        onClick={() => handleBox(index)}
        lighted={lighted.includes(index)}
        winner={winner}
      />
    );
  };
  return (
    <div className="game">
      {/* Kazanana göre yazının rengi değişti */}
      <p
        style={{
          color: winner
            ? winner === "../sword"
              ? "lightgreen"
              : "lightcoral"
            : "#c5d5c5",
        }}
        className="header-game"
      >
       {/* KAzanma veya Braberlik vaya oyun srasındaki text Hazırlandı */}
        {winner
          ? <div className="header-game-image"><img src={`${winner}32.png`} alt="" /><span>WON</span></div>
          : tie? <div className="header-game-image"><img src={`../vs32.png`} alt="" /> <span>TIE </span><img src={`../vs32.png`} alt="" /> </div> :<div className="header-game-image"><img src={`${currentPlayer}32.png`} alt="" /> <span>MOVE</span></div>}
      </p>
      <div className="row-game">
        {getBox(0)}
        {getBox(1)}
        {getBox(2)}
      </div>
      <div className="row-game ">
        {getBox(3)}
        {getBox(4)}
        {getBox(5)}
      </div>
      <div className="row-game">
        {getBox(6)}
        {getBox(7)}
        {getBox(8)}
      </div>
      <div className="reset">
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default Game;
