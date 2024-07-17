
import './Box.css';

const RightBox = (props) => {
  const {
    heading, content, imageUrl 
  } = props
  return (
    <div className="flex-right-item">
      <div className="box-1-l animate">
        <div className="box-para-head-div">
          <div className="img-div">
            <img src={imageUrl} alt="Icon" className="pr-icon"/>
          </div>
          <span className="box-para-head animate-content">{heading}</span>
        </div>
        <svg  fill="none" className="arrow-right"><path fill-rule="evenodd" clip-rule="evenodd" d="M.195 6.862a.666.666 0 10.943.943L4.471 4.47a.666.666 0 000-.942L1.138.195a.666.666 0 10-.943.943L3.057 4 .195 6.862z" fill="#170426"></path></svg>
        <p className="box-para animate-content">{content}</p>
      </div>
    </div>
  );
};

export default RightBox;
