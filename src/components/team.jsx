import React from "react";
import shruti from "../assets/shruti.jpg";
import shahil from "../assets/shahil.jpg";
import sarah from "../assets/sarah.jpg";
const Team = () => {
  return (
    <>
      <div className="team-container">
        <h1 className="team-title">Meet Our Team</h1>
        <div className="team-content-container">
          <div className="first-member">
            <img
              src={shahil}
              alt=""
              className="first-member-image"
              loading="lazy"
            />

            <div className="first-member-content">
              <h1 className="first-member-title">
                Shahil Narayan - The Visionary Leader
              </h1>
              <p className="first-member-paragraph">
                Shahil Narayan is the driving force behind Envoy Fiji, leading
                with vision and passion. As the mastermind of the business,
                Shahil is responsible for strategic decision-making, overseeing
                operations, and ensuring the company's growth and success. With
                his extensive experience and business acumen, Shahil navigates
                the ever-changing fitness industry, making Envoy Fiji a trusted
                name in the market.
              </p>
            </div>
          </div>
          <div className="first-member">
            <div className="first-member-content">
              <h1 className="first-member-title">
                Shruti - The Operations Maestro
              </h1>
              <p className="first-member-paragraph">
                Shruti Chand is the face of Envoy Fiji when it comes to customer
                interactions. With her exceptional communication skills and
                customer-centric approach, Shruti ensures that every customer
                has a delightful experience. From handling inquiries to managing
                orders and addressing concerns, Shruti's dedication and
                attention to detail make sure that customers feel valued and
                well-taken care of.
              </p>
            </div>
            <img
              src={shruti}
              alt=""
              className="first-member-image"
              loading="lazy"
            />
          </div>
          <div className="first-member">
            <img
              src={sarah}
              alt=""
              className="first-member-image"
              loading="lazy"
            />

            <div className="first-member-content">
              <h1 className="first-member-title">
                Nikhil - The Technological Innovator
              </h1>
              <p className="first-member-paragraph">
                Nikhil Naiker brings his expertise in technology to drive
                innovation at Envoy Fiji. As the technological innovator, Nikhil
                explores and implements cutting-edge solutions to enhance the
                company's digital presence and operational efficiency. From
                creating user-friendly websites to integrating advanced systems,
                Nikhil's technical prowess propels Envoy Fiji forward in the
                digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
