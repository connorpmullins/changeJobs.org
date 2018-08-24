import React from "react";
import "change-styleguide/dist/boot.css";

const Footer = () => {
  return (
    <div style={{width: "100%"}}>
      <hr className="mvn"/>
      <div className="bg-default ptxs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="col-xs-6">
                <ul className="list-space-s">
                  <li>
                    <h5>Positive Traits</h5>
                  </li>
                  <li>
                    <span>Hard Worker</span>
                  </li>
                  <li>
                    <span>Creative</span>
                  </li>
                  <li>
                    <span>Kind</span>
                  </li>
                  <li>
                    <span>Cooks for housemates</span>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6">
                <ul className="list-space-s">
                  <li>
                    <h5>Contact Me</h5>
                  </li>
                  <li>
                    <span>(623) 208-8664</span>
                  </li>
                  <li>
                    <span>connorpmullins@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mbxs xs-mbm">
            <div className="container phm">
              <hr className="mtl mbm phm xs-mtm"/>
              <div className="col-xs-12 col-sm-9 type-s type-weak mtxs pln xs-mtn">
                <ul className="list-inline">
                  <li>
                    <strong>© 2019, ChangeJobs.org, Inc.</strong>
                  </li>
                  <li>
                    <span>Certified Fake Corporation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;