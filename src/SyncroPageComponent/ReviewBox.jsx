import "./ReviewBox.css"
import ReviewData from "./ReviewData"

function ReviewBox() {
  return (
    <div className="p-b">
      <div className="p-b-1">
        <div className="sops-compare-div"><img src="sops-compare.svg" alt="sops-logo" className="sops-logo" /></div>
        <img src="vs.svg" alt="vs" className="vs-img" />
        <img src="syncro.svg" alt="syncro-logo" className="syncro-logo" />
      </div>
      <div className="p-b-2">
        <h1 className="p-b-2-h-1">Tired of feeling unheard with Syncro?</h1>
        <p className="p-b-2-p-1">Move on to SuperOps.ai - the intuitive MSP software to make work simple, effortless, and fun.</p>
      </div>
      <div className="p-b-3">
        <button className="p-b-3-bt-1">MAKE THE SWITCH NOW</button>
        <button className="p-b-3-bt-2">BOOK A DEMO</button>
      </div>
      <div className="p-b-4">
        {ReviewData.map((item, index) => (
          <div className="p-b-4-c" key={index}>
            <p className="p-b-4-p">{item.text}</p>
            <div className="p-b-4-l"></div>
            <div className="p-b-4-p">
              <div className="p-b-4-s">
                <img src={item.image} alt="profile" className="p-b-4-p-i" />
                <div className="p-b-4-p-a">
                  <h2 className="p-b-4-p-a-n">{item.name}</h2>
                  <p className="p-b-4-p-a-p">{item.title}</p>
                </div>
              </div>
              <p className="p-b-4-p-2">view review</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewBox;
