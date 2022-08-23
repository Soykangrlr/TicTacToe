const Winnercheck=(board)=>{
    //  Kazanam durumları belirlendi
    const winnerLines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
   return winnerLines.find(([a,b,c])=>{
    // KAzanam Durumlarına Göre üçüde eişitse true değilse false dödürlecek
        if(board[a]!==null&&board[a]===board[b]&&board[a]===board[c]){
            return true
        }
        return false
    })

}
// Tahatadaki Tüm kutular dolduysa berabarlik olacaak
const TieCheck=(board)=>{
const x =board.filter(item=>item===null)
    if(x.length===0){
        return true
    }
    return false
}

export{ Winnercheck, TieCheck}