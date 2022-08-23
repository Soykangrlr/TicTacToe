function ComputerMove(board) {
//  Kazanam durumları belirlendi
  const Lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let index = null
  // eğer kazanma durunmundaki satır veye sutun veya çapraz olan dizinin 
  //iki  tanesi eşitse  ve üçüncü değer boştaysa bilgisayar o kutuyu dolduracak
  
  Lines.find(([a, b, c]) => {
    if (board[a] !== null && board[a] === board[b] && board[c] === null) {
      index = c;
    } else if (
      board[a] !== null &&
      board[a] === board[c] &&
      board[b] === null
    ) {
      index = b;
    } else if (
      board[b] !== null &&
      board[b] === board[c] &&
      board[a] === null
    ) {
      index = a;
    }
  });

  // eğer Kutu kontrolu null gelirse random bir sayı üreteck 

  const indexList = [];
  if (index === null) {
    // tahatdaki boş indexler belirlendi
    // Yani bir diziye atandı. 
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        indexList.push(i);
      }
    }
    //indexList dizisinin uzunluğu göre random sayı varecek ve o indisteki değer gönderilcek 
    if (indexList.length > 0) {
      const randomnuber = Math.floor(Math.random() * indexList.length);
      if (board[randomnuber] === null) {
        index = randomnuber;
      } else {
        index = randomnuber + 1;
      }
    }
  }

  return index;
}
export default ComputerMove;
