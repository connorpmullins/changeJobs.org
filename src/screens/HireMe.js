import React from "react";
import "change-styleguide/dist/boot.css";
import { Link } from "react-router-dom";

/*
          <div className="position-fixed-bottom visible-xs mobile-action-button-container js-mobile-action-button-container-visible">
            <hr className="mvn"/>
            <div className="bg-default phs pvxs xs-phx">
              <input type="submit" name="mobile_sign_button" value="Sign this petition" className="button sign btn btn-action btn-big btn-full js-mobile-action-button js-action-button-preload-click-spinner" />
            </div>
          </div>
*/


const HireMe = () => {
  return (
    <div className="table-row table-row-expand main">
      <div className="show">
        <div className="container xs-man bg-brighter">
          <div className="js-petition-content ">
            <div className="visible-xs">
              <div className="photo-component">
                <div className="flex-embed">
                  <div className="flex-embed-ratio flex-embed-16x9">
                    <div className="flex-embed-content">
                      <img alt="connor" src={require("../assets/DSC_0111.jpg")} className="image-cropper-nodrag position-absolute-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm-txt-c mtxxl xs-mtm xs-phs bg-brighter">
              <h1 className="mtl mbxxxl xs-mts xs-mbxs petition-title txt-c">
                Demand Change.org hire Connor Mullins as quickly as possible
              </h1>
            </div>
          </div>

          <div className="row mbxxl xs-mbn xs-mhn">
            <div className="col-xs-12 col-sm-8 js-petition-content xs-pan">
              <div className="mrxxl xs-mrn">
                <div className="xs-phs">
                  <div className="visible-xs">
                    <div className="mtxxxs">
                      <div className="gradient-thermometer">
                        <p className="mbxs js-thermometer-copy">
                          <strong> 99,999 have signed.</strong>
                          " Let's get to 100,000!"
                        </p>
                        <div className="progress-bar-branded">
                          <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{width: "98%"}} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mtxs" />
                  </div>
                </div>
                <hr className="mvl visible-xs" />
                <div className="xs-phs">
                  <div className="mbxs xs-mbs mtm">
                    <div className="arrange arrange-middle">
                      <div className="arrange-fit prxs mrxxxs">
                        <div className="media-profile-small-height arrange-left">
                          <div className="media-profile-img position-left">
                            <div className="photo-component">
                              <div className="flex-embed border-rounded-circle">
                                <div className="flex-embed-ratio flex-embed-undefined">
                                  <div className="flex-embed-content">
                                    <img alt="margaret" className="image-cropper-nodrag position-absolute-center border-rounded-circle" src={require("../assets/margaret.jpg")} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="arrange-fill petition-byline-content">
                        <div>
                          <strong className="type-s type-weak">
                            <a className="link-subtle">Connor's Mom</a>
                              <span> started this petition to </span>
                            <a className="link-subtle">Change.org</a>
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mbl">
                    <div className="type-break-word type-l description">
                      <div className="rte js-description-content">
                        <p> YOU SHOULD HIRE ME FOR THESE REASONS, does making this any longer help? </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ptxs" />

                <div className="xs-bg-default ptxxxs xs-mts pbl">
                  <div className="js-track-petition-scroll xs-phs">
                    <div className="updates-feed mtxl">
                      <div className="ptm xs-ptxxs">
                        <h3 className="mtn mbxl xs-mbl">Updates</h3>
                      </div>
                      <div>
                        <Link to="/" className="link-block border-a border-rounded bg-brighter border-none-a-xs">
                          <div className="photo-component">
                            <div className="flex-embed">
                              <div className="flex-embed-ratio flex-embed-16x9">
                                <img alt="connor2" className="flex-embed-content flex-embed-cover-image border-rounded-t" src={require("../assets/connor2.jpg")} />
                              </div>
                            </div>
                          </div>
                          <div className="pam xs-pas">
                            <div className="visible-xs mbl">
                              <div className="hide-overflow is-truncated" style={{height: 104, wordWrap: "break-word", maxHeight: "none"}} >
                                <span className="dotdotdot">
                                  <p className="man pan">
                                    <span className="h4 mtn">Tell Change.org Connor's Coming</span>
                                  </p>
                                  <div className="rte mtxs">
                                    <p>
                                      <strong>
                                        Thanks to people like you, our petition asking
                                        Change.org to hire Connor has over 99,000 signatures.
                                      </strong>
                                      Now it's time for us to deliver this petition to
                                      Change.org and urge them to commit to onboarding Connor
                                      sometime in the next month...
                                    </p>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="media-profile media-profile-base-height mtl xs-mtxxs type-s">
                              <div className="media-profile-img">
                                <div className="txt-m">
                                  <div className="photo-component">
                                    <div className="flex-embed border-rounded-circle">
                                      <div className="flex-embed-ratio flex-embed-undefined">
                                        <div className="flex-embed-content">
                                          <img alt="margaret" className="image-cropper-nodrag position-absolute-center border-rounded-circle" src={require("../assets/margaret.jpg")}/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-profile-body txt-m">
                                <div className="type-ellipsis">
                                  <strong>Margaret Mullins</strong>
                                  <div className="type-weak type-ellipsis">6 hours ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-fixed-bottom bg-default border-t paxs">
          <Link to="/Petition">
          <button className="btn-action btn-full border-rounded paxs">
            Sign this Petition
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HireMe;