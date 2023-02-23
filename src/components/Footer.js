import './styles/Footer.css';

function Footer(props) {
  const openNewTab = props.clickHandler;
  return (
    <div className="Footer" id="footer"> 
      Made by <a 
        onClick={openNewTab} 
        onMouseDown={openNewTab}
        href="http://linktr.ee/ivanderlich"
        className="footer-link"
        >Ivan Derlich</a> 2020 with React.js
    </div>
  );
}

export default Footer;