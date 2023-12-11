import React from "react";

const About = ({
  resumeBasicInfo,
  sharedBasicInfo,
}) => {

  let about;
  let hello;
  let profilepic;
  let sectionName;

  if (sharedBasicInfo) {
    profilepic = "images/" + sharedBasicInfo.image;
  }
  if (resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.about;
    hello = resumeBasicInfo.description_header;
    about = resumeBasicInfo.description;
  }

  return <section id="about">
  <div className="col-md-12">
    <h1 style={{ color: "black" }}>
      <span>{sectionName}</span>
    </h1>
    <div className="row center mx-auto mb-5">
      <div className="col-md-4 mb-5 center">
        <div className="polaroid">
          <span style={{ cursor: "auto" }}>
            <img
              height="250px"
              style={{
                objectFit: 'contain'
              }}
              src={profilepic}
              alt="Avatar placeholder"
            />
          </span>
        </div>
      </div>
      <div className="col-md-8 center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <span
                className="iconify"
                data-icon="emojione:red-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <div
              className="card-body font-trebuchet text-justify ml-3 mr-3"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="wave">{hello}</span>
              <br />
              <br />
              {about}
            </div>
            <div
              className="card-body font-trebuchet text-justify ml-3 mr-3"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              {
              sharedBasicInfo?.social.map((network) => {
                return (
                  <span key={network.name} className="m-4" >
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      <i style={{
                      color: 'black',
                    }} className={network.class}></i>
                    </a>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

};

export default About;
