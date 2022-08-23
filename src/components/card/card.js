
function Card({title1,title2,bg}) {
  return (
    <>
    <div style={{backgroundColor:bg}} class="card">
    <p> {title1}</p>
    <img src="./vs.png" />
    <p> {title2}</p>
</div></>
  )
}
export default Card