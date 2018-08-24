import React from "react";
import "change-styleguide/dist/boot.css";

const Signatory = (props) => {
  return (
    <div className="recent-signers mal mbs">
      <div className="recent-signer type-s type-weak pvxxxs">
        <div className="arrange arrange-middle">
          <div className="arrange-fit prxs mrxxxs mvxxxs">
            <div className="media-profile-small-height">
              <div className="media-profile-img">
                <div className="flex-embed border-rounded-circle">
                  <div className="flex-embed-ratio">
                    <div className="flex-embed-content">
                      <img alt="Obama" className="image-cropper-nodrag position-absolute-center border-rounded-circle" src={props.pic} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arrange-fill">
            <div className="hide-overflow">
              <span>
                <strong> {props.name} </strong>
                signed {props.min} minutes ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signatory;