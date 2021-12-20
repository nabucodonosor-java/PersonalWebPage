/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../assets/images/mailz.jpeg";
import load1 from "../../assets/images/load2.gif";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import Footer from "../../containers/Footer/Footer";
import "./ContactMe.css";

const ContactMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      // eslint-disable-next-line no-unused-vars
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [banner, setBanner] = useState("");
      const [bool, setBool] = useState(false);
    
      const handleName = (e) => {
        setName(e.target.value);
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleMessage = (e) => {
        setMessage(e.target.value);
      };
      console.log(name);
      const submitForm = async (e) => {
        e.preventDefault();
        try {
          let data = {
            name,
            email,
            message,
          };
          setBool(true);
          const res = await axios.post(`/contact`, data);
          if (name.length === 0 || email.length === 0 || message.length === 0) {
            setBanner(res.data.msg);
            toast.error(res.data.msg);
            setBool(false);
          } else if (res.status === 200) {
            setBanner(res.data.msg);
            toast.success(res.data.msg);
            setBool(false);
    
            setName("");
            setEmail("");
            setMessage("");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      return (
        <div className="main-container fade-in" id={props.id || ""}>
          <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
          <div className="central-form">
            <div className="col">
              <h2 className="title">
                <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
              </h2>{" "}
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.cartacapital.com.br/cartaexpressa/apos-ascensao-de-bolsonaro-numero-de-grupos-neonazistas-cresceu-no-pais/">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/francocanizobrasil/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/watch?v=UP2XoGfhJ1Y">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/franco_brasil">
                <i className="fa fa-twitter" />
              </a>
            </div>
            <div className="back-form">
              <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="image not found" />
              </div>
              <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleName} value={name} />
    
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleEmail} value={email} />
    
                <label htmlFor="message">Message</label>
                <textarea type="text" onChange={handleMessage} value={message} />
    
                <div className="send-btn">
                  <button type="submit">
                    send
                    <i className="fa fa-paper-plane" />
                    {bool ? (
                      <b className="load">
                        <img src={load1} alt="image not responding" />
                      </b>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      );
}

export default ContactMe;