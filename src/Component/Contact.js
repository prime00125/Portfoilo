import React from "react";
import "../ComStyles/Contact.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map } from "@googlemaps/react-wrapper";
import {
  faLinkedin,
  faSquareInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contbody">
      <div className="backpart1"></div>
      <div className="backpart2"></div>
      <section className="address">
        <h1> Address :</h1>
        <div>
          <div className="map">
            <p>
              Permanent Address :<br />
              <br /> renuka nagar 3rd cross talur road ballari, karnataka
              583103;
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d38224.01857395877!2d76.91030859660805!3d15.149078410968572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDA5JzM4LjQiTiA3NsKwNTUnMzEuMyJF!5e0!3m2!1sen!2sin!4v1692706715891!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="map">
            <p>
              Current Address :<br />
              <br /> kengeri satellite town kengeri bengaluru, karnataka 560060;
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d243.05450101245265!2d77.48000443005967!3d12.915946334392524!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692706864500!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <div className="card">
        <div className="cpar1">
          <a href="+91 8951769070" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faPhone} shake /> +91 8951769070
          </a>
          <a href="manjunathrmrakiaish@gmail.com" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} bounce />{" "}
            manjunathrmrakiaish@gmail.com
          </a>
        </div>
        <div className="cpar2">
          {" "}
          <a href="https://github.com/prime00125" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faGithub} fade />
          </a>
          <a
            href="https://www.instagram.com/optimus_prime.001/"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faSquareInstagram} fade />
          </a>
          <a
            href="https://www.linkedin.com/in/manjunath-rm-942675224/"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} fade />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
