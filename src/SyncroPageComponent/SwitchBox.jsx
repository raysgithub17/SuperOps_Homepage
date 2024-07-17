import "./SwitchBox.css";

function SwitchBox() {
  return (
    <div className="s-b">
        <div className="s-b-1">
            <h1 className="s-b-1-h-1">We don’t blow our own trumpet</h1>
            <p className="s-b-1-p-1">Hear from customers who made the switch to SuperOps.ai.</p>
        </div>
        <div className="s-b-2">
            <div className="s-b-2-c">
                <div className="s-b-2-r-1">
                    <img src="switch-sops.svg" alt="logo" className="switch-sops-logo"/>
                    <div className="s-b-2-r-1-l">9.9</div>
                    <div className="s-b-2-r-1-l">9.4</div>
                    <div className="s-b-2-r-1-l">9.3</div>
                    <div className="s-b-2-r-1-l">9.3</div>
                </div>
                <div className="s-b-2-r-2">
                    <div className="s-b-2-r-2-c">
                        <img src="up.svg" alt="up" className="up-logo" />
                        <p className="u-p-d">QUALITY OF SUPPORT</p>
                        <img src="down.svg" alt="down" className="down-logo" />
                    </div>
                    <div className="s-b-2-r-2-c">
                        <img src="up.svg" alt="up" className="up-logo" />
                        <p className="u-p-d">EASE OF SETUP</p>
                        <img src="down.svg" alt="down" className="down-logo" />
                    </div>
                    <div className="s-b-2-r-2-c">
                        <img src="up.svg" alt="up" className="up-logo" />
                        <p className="u-p-d">EASE OF USE</p>
                        <img src="down.svg" alt="down" className="down-logo" />
                    </div>
                    <div className="s-b-2-r-2-c">
                        <img src="up.svg" alt="up" className="up-logo" />
                        <p className="u-p-d">EASE OF ADMIN</p>
                        <img src="down.svg" alt="down" className="down-logo" />
                    </div>
                </div>
                <div className="s-b-2-r-3">
                <img src="switch-syncro.svg" alt="logo" className="switch-syncro-logo"/>
                    <div className="s-b-2-r-3-l">9.9</div>
                    <div className="s-b-2-r-3-l">9.4</div>
                    <div className="s-b-2-r-3-l">9.3</div>
                    <div className="s-b-2-r-3-l">9.3</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SwitchBox