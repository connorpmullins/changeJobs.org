import React from "react";
import "change-styleguide/dist/boot.css";
import { Link } from "react-router-dom";
import Signatory from "../components/Signatory";
import Obama from "../assets/obama.jpg";
import Dalai from "../assets/dalaiLama.jpeg";

const Petition = () => {
  return (
    <div>
      <div className="page-wrap bg-brighter position-absolute position-top">
        <div className="js-main-header ptxl plm">
          <div className="arrange arrange-middle">
            <div className="arrange-fill">
              <ul className="list-inline">
                <li className="mrs xs-mrxxs">
                  <h4 className="mvn"> Complete your signature </h4>
                </li>
              </ul>
            </div>
            <div className="arrange-fit">
              <div className="position-right prm">
                <div className="notification notification-with-counter">
                  <Link to="/" className="link-stealth">
                    <span className="symbol symbol-close symbol-compact symbol-l" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative mbxxxl">
        <Signatory min={19} name="Barack Obama" pic={Obama} />
        <Signatory min={8} name="His Holiness the 14th Dalai Lama" pic={Dalai} />

        <div>
          <hr className="mts mbm hidden xs"/>
          <div className="identified-user-details">
            <a className="link-block js-edit mlm mrm">
              <div className="box mtn border-a-xs pan xs-apxs mbs xs-mbxs">
                <div className="arrange arrange-middle">
                  <div className="arrange-fill">
                    <div className="arrange-fill-content-ellipsis prs">
                      <div className="media-profile media-profile-small-height type-s pal">
                        <div className="media-profile-img">
                          <div className="txt-m">
                            <div className="photo-component">
                              <div className="flex-embed border-rounded-circle" style={{width: 30}}>
                                <div className="flex-embed-ratio flex-embed-undefined">
                                  <div className="flex-embed-content">
                                    <img alt="channie" className="image-cropper-nodrag position-absolute-center border-rounded-circle" src={require("../assets/channieWu.jpeg")}/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media-profile-body txt-m">
                          <div className="type-ellipsis">
                            <strong>Channie Wu</strong>
                            <span className="type-weak">SanFrancisco, CA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrange-fit">
                    <div className="type-s type-weak media-profile-small-height prm">
                      <div className="txt-m txt-c">
                        <div className="symbol symbol-edit symbol-compact symbol-l" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="position-relative mlm mrm">
            <div className="mvxs">
              <div className="control-group mbn js-message-bubble">
                <div class="mbs">
                  <div class="control">
                    <div class="input">
                      <textarea placeholder="I'm signing because... (optional)" rows="3" name="message" className="textarea-no-resize paxs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="share-and-button">
            <div className="sign_options">
              <div className="mvs mlm mrm">
                <div className="control-group mbn mtxs mbxxs type-s">
                  <div className="control-group mbn">
                    <div className="control mbm">
                      <div className="check">
                        <label>
                          <input type="checkbox" name="fb_share" class="mtxxxs"/>
                          Share with Facebook friends"
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="type-s">
                  <div className="control-group mvxxs">
                    <div className="control mbm">
                      <div className="check">
                        <label>
                          <input type="checkbox" name="public" checked="checked" class="mrxxs mtxxxs" />
                          Display my name and comment on this petition
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" name="sign_button" className="btn btn-action btn-big btn-full js-sign-button mbxl">
                  <span style={{top: -2.5}} className="position-relative">
                    <span className="symbol symbol-lock symbol-s" />
                  </span>
                  Hire Connor Mullins
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Petition;