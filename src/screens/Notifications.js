import React from "react";
import "change-styleguide/dist/boot.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="notifications-index-view bg-default">
      <div className="container ptxl pbxxxl xs-pvxl bg-brighter">
        <h1 className="txt-c mtl mbxl xs-mtxs">Notifications</h1>
        <div className="row">
          <div className="col-md-6 col-sm-8 col-xs-12 xs-phn position-block-center">
            <ul className="list-rule js-notifications-list">
              <li className="notification position-relative pvn bg-default unread">
                <Link to="/HireMe" className="display-block link-stealth">
                  <div className="row">
                    <div className="col-xs-4 pll prs pts pbs">
                      <div className="ptxxs pbxxs">
                        <div className="photo-component">
                          <div className="flex-embed">
                            <div className="flex-embed-ratio flex-embed-3x3">
                              <img alt="connor and jacky" className="flex-embed-content flex-embed-cover-image" src={require("../assets/connorJacky.jpg")} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-8 pln prl mts pbs">
                      <div className="hide-overflow" style={{maxHeight: "none", wordWrap: "break-word"}}>
                        <span className="dotdotdot">
                          <p>
                            <strong>Milestone: </strong>
                             Petition goal almost reached. Help us by spreading the word.
                          </p>
                        </span>
                      </div>
                      <div className="hide-overflow" style={{maxHeight: "none", wordWrap: "break-word"}}>
                        <span className="dotdotdot">
                          <div className="type-weak type-s">
                            <span>6 hours ago</span>
                            <span className="mhxxs">-</span>
                            <span>Click here, or better yet, tell me I've got the job</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;