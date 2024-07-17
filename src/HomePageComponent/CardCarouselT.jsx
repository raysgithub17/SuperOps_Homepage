import './CardCarouselT.css'
const CardCarouselT = ({imageUrl }) => {
  return (
    <div className="card-t">
      <img className="card-img-top" src={imageUrl} alt="" />
    </div>
  )
}

export default CardCarouselT