import React from "react";
import "change-styleguide/dist/boot.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-wrap bg-default">
      <div className="table-row table-row-expand main">
        <div className="content">
          <div className="flex-embed flex-embed-cover-image" style={{backgroundImage: "url(https://imgur.com/AoVLjFz.jpg)"}}>
            <div className="flex-embed-ratio flex-embed-16x9"></div>
              <div className="flex-embed-content">
                <div className="home-intro mvxl txt-c pvxxxl xs-pbn">
                  <h1 className="type-xl">The world's platform for getting Connor Hired</h1>
                  <p className="type-l">
                    "247,330,024 people taking action"
                    <br className="visible-xs hidden-sm" />
                    <Link to="/Notifications">Victory today.</Link>
                  </p>
                  <Link to="/Notifications" className="js-sap-link btn btn-action btn-big mvl">Join the petition</Link>
                </div>
            </div>
          </div>
        </div>

        <div className="row mtl xs-mtn sm-mtn">
          <div className="col-md-12 plxxs xs-plxs md-plxs sm-plxs">
            <div className="row home-discover-feed mvn border-t">
              <h3 className="mlxl mtl">What's happening on ChangeJobs.org</h3>
            </div>

            <div className="js-discover-card-list">
              <div className="js-discover-card">
                <div className="bg-brighter pas xs-pan">
                  <div className="bg-default pan xs-pvxs">
                    <div className="petition-list-item box-sm box-basic bg-brighter mvn pan border-t border-b">
                      <Link to="/Notifications" className="link-block phm">
                        <div className="media mvs type-s">
                          <div className="media-img mrxs">
                            <img alt="cnn" src="https://static.change.org/product/media-mentions/favicons/cnnmoney.png" width="14" className="js-media-img" />
                          </div>

                          <div className="media-body">
                            "Featured in "
                            <strong>CNNMoney</strong>
                            " and 5003 other publications"
                          </div>
                        </div>
                      </Link>
                      <hr className="mvn"/>
                    </div>

                    <Link to="/HireMe" className="clearfix link-block pbs phm bg-brighter">
                      <div className="row mtxs pts">
                        <div className="col-xs-12 col-sm-9">
                          <p className="type-ellipsis type-s type-weak mbxxs">
                            Petition to Change.org
                          </p>
                          <h4 class="mtn type-break-word">Demand Change.org hire Connor Mullins as quickly as possible </h4>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                          <div className="visible-xs mln mbxxs mts">
                            <div className="photo-component">
                              <div className="flex-embed">
                                <div className="flex-embed-ratio flex-embed-16x9">
                                  <div className="flex-embed-content">
                                    <img alt="connor" className="image-cropper-nodrag position-absolute-center" src={require("../assets/DSC_0111.jpg")} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pvxs visible-xs position-relative">
                        <div>
                          <div style={{maxHeight: 57}} className="discover-feed-read-more hide-overflow position-relative type-s">
                            <p className="js-description type-break-word">
                              "As a person, here's some text. Lorem Ipsum,
                              I need enough lines here that I can confirm the
                              break point is effective and the code works. I'll
                              come back later to change this to an actual plea
                              to get myself hired. Let's save and see if this
                              is long enough. Okay, not enough text. Little more
                              info then, it's currently 1:51. I st...
                            </p>
                            <div class="js-read-more link txt-r position-absolute position-right position-bottom white-gradient-left">
                              Read more
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row pts xs-ptn">
                        <div className="col-xs-6">
                          <div className="media-profile media-profile-small-height type-s">
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
                                <strong>Connor's Mom</strong>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xs-6 txt-r">
                          <div className="media-profile media-profile-small-height type-s">
                            <div className="txt-m">
                              <span className="symbol symbol-supporters type-branded" aria-hidden={true} />
                              <span> Probably at least 20 supporters</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mas bg-brighter">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;