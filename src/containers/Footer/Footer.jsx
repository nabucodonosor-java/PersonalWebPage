import ScrollService from "../../utils/ScrollService";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="scroll-container">
            <button
            className="btn-scroll"
            onClick={() => ScrollService.scrollHandler.scrollToHome()}>
                {" "}
                <i className="fa fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default Footer;