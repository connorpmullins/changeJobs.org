import React from "react";
import { Link } from "react-router-dom";
import "change-styleguide/dist/boot.css";

const Header = () => {
  return (
    <div className="box-basic border-b ptxs pbxs plxs">
      <div className="arrange arrange-middle">
        <Link to="/" className="arrange-fill link-stealth">
          <h3 className="type-branded mvn" style={{fontWeight: "bold"}}>changejobs.org</h3>
        </Link>
        <div className="arrange-fit prm">
          <tr>
            <td className="pvn pln prl xs-prl">
              <Link to="/notifications" className="link-block js-notification-jewel-link">
                <div className="notification notification-with-counter">
                  <span className="symbol symbol-notifications symbol-compact symbol-l" />
                  <span className="notification-item js-badge">
                    <div className="js-badge-increment">1+</div>
                  </span>
                </div>
              </Link>
            </td>
            <td className="pan">
            <button className="link-stealth header-height media-inline type-no-wrap">
              <div className="media-inline-img mrn mbxxxs">
                <div style={{width: 24}} className="photo-component">
                  <div className="flex-embed border-rounded-circle">
                    <div className="flex-embed-ratio flex-embed-undefined">
                      <div className="flex-embed-content">
                        <img alt="channie" style={{width: 24}} className="image-cropper-nodrag position-absolute-center border-rounded-circle" src={require("../assets/channieWu.jpeg")}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            </td>
          </tr>
        </div>
      </div>
    </div>
  )
};

export default Header;