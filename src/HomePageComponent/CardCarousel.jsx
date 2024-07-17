import './CardCarousel.css'
const CardCarousel = ({imageUrl , content}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt="" />
      <div className="card-body">
        <p className="card-text">{content}</p>
        <p className="rm-1">
          read more
        </p>
      </div>
    </div>
  );
}; 

export default CardCarousel
