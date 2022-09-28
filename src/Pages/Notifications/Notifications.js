import React from "react";

const Notifications = () => {
  return (
    <div
      className="extra-pad"
      style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
    >
      <div className="row g-0 g-lg-2 p-0 d-flex align-items-center">
        <div className="col-6 col-lg-6 col-sm-6 body-large-black text-start fw-bold">
          Notifications
        </div>
        <div className="col-6 col-lg-6 col-sm-6 response text-end">
          Mark all as read
        </div>
      </div>
      <div className="notification-box mt-3">
        <div>
          <div className="notification-userbox">
            <p className="heading-white fw-bold d-flex align-items-center">A</p>
          </div>
          <p className="body-black text-start fw-bold my-2">
            Lorem ipsum dolor sit amet
          </p>
          <p className="body-black text-start my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est purus
            libero interdum et blandit magna fames odio vel.
          </p>
          <p className="subtitle-black fw-bold">6 days ago</p>
          <hr className="mt-4 mx-5 mb-4" />
        </div>
        <div>
          <div className="notification-userbox">
            <p className="heading-white fw-bold d-flex align-items-center">A</p>
          </div>
          <p className="body-black text-start fw-bold my-2">
            Lorem ipsum dolor sit amet
          </p>
          <p className="body-black text-start my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est purus
            libero interdum et blandit magna fames odio vel.
          </p>
          <p className="subtitle-black fw-bold">6 days ago</p>
          <hr className="mt-4 mx-5 mb-4" />
        </div>
        <div>
          <div className="notification-userbox">
            <p className="heading-white fw-bold d-flex align-items-center">A</p>
          </div>
          <p className="body-black text-start fw-bold my-2">
            Lorem ipsum dolor sit amet
          </p>
          <p className="body-black text-start my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est purus
            libero interdum et blandit magna fames odio vel.
          </p>
          <p className="subtitle-black fw-bold">6 days ago</p>
          <hr className="mt-4 mx-5 mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
