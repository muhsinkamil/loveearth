import './styles.scss';

function FooterIconLine() {
  return (
    <div className="footer-icon-container">
      <div className="ftr-icon-left">LightHouse &copy; 2022</div>
      <div className="ftr-icon-right">
        <div className="ftr-icon">
          <span className="hvr-underln-anim">Github</span>
        </div>
        <div className="ftr-icon">
          <span className="hvr-underln-anim">Twitter</span>
        </div>
        <div className="ftr-icon">
          <span className="hvr-underln-anim">Linkedin</span>
        </div>
      </div>
    </div>
  );
}

export default FooterIconLine;
