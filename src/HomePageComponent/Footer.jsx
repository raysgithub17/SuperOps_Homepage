import './Footer.css';

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-top">
        <div className="footer-logo">
          <div className='logo-stuff-div'>
              <div className="logo-div">
                <img src="sops.svg" alt="logo" className="sops-logo"/>
              </div>
              <p className="logo-text">Powered by AI Superpowered for MSPs</p>
              <p className="copyright">© 2024 SuperOps. All rights reserved</p>
          </div>
        </div>
        <div className="footer-links link-1">
          <p className="link-heading">Superops</p>
          <a className="link-item" href="#">about us</a>
          <a className="link-item" href="#">Our philosophy</a>
          <a className="link-item" href="#">Features</a>
          <a className="link-item" href="#">Pricing</a>
          <a className="link-item" href="#">Marketplace</a>
          <a className="link-item" href="#">Customers</a>
          <a className="link-item" href="#">News room</a>
          <a className="link-item" href="#">Careers</a>
          <a className="link-item" href="#">Contact us</a>
          <a className="link-item" href="#">Affiliate</a>
          <a className="link-item" href="#">Resellers</a>
          <a className="link-item" href="#">Tech partners</a>
          <a className="link-item" href="#">Events</a>
          <p className="link-heading">Platform</p>
          <a className="link-item" href="#">PSA</a>
          <a className="link-item" href="#">RMM</a>
          <a className="link-item" href="#">Project Management</a>
          <a className="link-item" href="#">IT Documentation</a>
        </div>
        <div className="footer-links link-2">
          <p className="link-heading">Features</p>
          <a className="link-item" href="#">Asset Management</a>
          <a className="link-item" href="#">Patch Management</a>
          <a className="link-item" href="#">Alert Management</a>
          <a className="link-item" href="#">Policy Management</a>
          <a className="link-item" href="#">Intelligent Alerting</a>
          <a className="link-item" href="#">Security Management</a>
          <a className="link-item" href="#">Admin Console</a>
          <a className="link-item" href="#">Service Desk</a>
          <a className="link-item" href="#">Quote Management</a>
          <a className="link-item" href="#">Runbooks</a>
          <a className="link-item" href="#">Automation</a>
          <a className="link-item" href="#">Client Management</a>
          <a className="link-item" href="#">SLA Management</a>
          <a className="link-item" href="#">Contract Management</a>
          <a className="link-item" href="#">Reporting</a>
          <a className="link-item" href="#">Internal IT</a>
          <a className="link-item" href="#">Network Monitoring</a>
          <a className="link-item" href="#">Mobile app</a>
          <a className="link-item" href="#">Smart Tracker</a>
          <a className="link-item" href="#">Scheduling</a>
        </div>
        <div className="footer-links link-3">
          <p className="link-heading">Resources</p>
          <a className="link-item" href="#">Community</a>
          <a className="link-item" href="#">Blog - The Bugle</a>
          <a className="link-item" href="#">SuperPod</a>
          <a className="link-item" href="#">SuperPod Bytes</a>
          <a className="link-item" href="#">Books</a>
          <a className="link-item" href="#">Help Center</a>
          <a className="link-item" href="#">Road to 1 million</a>
          <a className="link-item" href="#">Templates</a>
          <a className="link-item" href="#">Webinars</a>
          <p className="link-heading">Marketplace</p>
          <a className="link-item" href="#">Splashtop</a>
          <a className="link-item" href="#">Teamviewer</a>
          <a className="link-item" href="#">Connectwise Control</a>
          <a className="link-item" href="#">Xero</a>
          <a className="link-item" href="#">Webroot</a>
          <a className="link-item" href="#">Quickbooks Online</a>
          <a className="link-item" href="#">Quickbooks Desktop</a>
          <a className="link-item" href="#">Pax8</a>
        </div>
        <div className="footer-links link-4">
          <p className="link-heading">Learn</p>
          <a className="link-item" href="#">Best RMM software</a>
          <a className="link-item" href="#">UEM Software</a>
          <a className="link-item" href="#">Best Patch Management Software</a>
          <a className="link-item" href="#">Patch Manager</a>
          <a className="link-item" href="#">UEM VS EMM VS MDM</a>
          <a className="link-item" href="#">MSP Automation</a>
          <a className="link-item" href="#">Best PSA Software</a>
          <a className="link-item" href="#">Best IT Ticketing Tool</a>
          <a className="link-item" href="#">Open source RMM</a>
          <p className="link-heading">Compare</p>
          <a className="link-item" href="#">Atera</a>
          <a className="link-item" href="#">Syncro</a>
          <a className="link-item" href="#">NinjaOne</a>
          <a className="link-item" href="#">Datto</a>
          <a className="link-item" href="#">HaloPSA</a>
          <a className="link-item" href="#">Connectwise</a>
          <a className="link-item" href="#">Pulseway</a>
          <a className="link-item" href="#">Kaseya</a>
        </div>
      </div>
      <div className="footer-bottom">
          <div className='f-b-p-1'>
                <img src="med1.png" alt="med-logo" className="med-logo"/>
                <img src="med2.png" alt="med-logo" className="med-logo"/>
          </div>
          <div className='f-b-p-2'>
              <p className='sub'>Subscribe to our newsletter</p>
              <input type="text" id="sub" name="sub" placeholder='Email address' className='sub-input'/>
              <button className="sub-button">SUBSCRIBE</button>
              <div className='f-b-p-2-l'>
                  <a className='link-item' href="#">Terms of use</a>
                  <a className='link-item' href="#">Privacy policy</a>
                  <a className='link-item' href="#">Cookie policy</a>
                  <a className='link-item' href="#">GDPR</a>
                  <a className='link-item' href="#">Security</a>
              </div>
          </div>
          <div className='f-b-p-3'>
            <p className='follow'>Follow us on</p>
            <div className='sm-logo-div'>
                <svg className='sm-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" id="instagram"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z"></path><circle cx="9.6" cy="9.6" r="1.667"></circle><path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path></svg>
                <svg className='sm-logo-2' xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)"><rect className='sm-logo-1' width="512" height="512" fill="#000" rx="60"></rect><path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
                <svg className='sm-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
                <svg  className='sm-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="facebook"><path d="M50.8,3.57A45.75,45.75,0,1,0,96.54,49.32,45.8,45.8,0,0,0,50.8,3.57ZM63.49,30.71a.69.69,0,0,1-.69.69H57.3a2.45,2.45,0,0,0-2.45,2.44V39.6h7.83a.69.69,0,0,1,.68.75l-.68,8.12a.69.69,0,0,1-.69.63H54.85V76.05a.69.69,0,0,1-.69.69H44.31a.69.69,0,0,1-.69-.69V49.1H38.7a.69.69,0,0,1-.69-.69V40.29a.69.69,0,0,1,.69-.69h4.92V31.78A9.88,9.88,0,0,1,53.5,21.9h9.3a.69.69,0,0,1,.69.69Z"></path></svg>
            </div>
            <p className='link-item-l'>Contact us: +1 628-270-9924 | +44 20 4525 2090</p>
          </div>

      </div>
    </div>
  );
}

export default Footer;