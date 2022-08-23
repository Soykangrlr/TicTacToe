function Box({value,onClick,lighted,winner}) {
  return (
    // Gelen value değerini box yazdırdım ve kazanan durumuna göre bbackgroun değişti.
    <div style={{backgroundColor:lighted?winner==="../sword"?'lightgreen':'lightcoral':'bisque'}}  onClick={onClick} className="box-game"><img src={`${value}.png`} alt="" /></div>
  )
}
export default Box