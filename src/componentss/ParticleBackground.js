import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <>
      <h2>Hello</h2>
      <Particles
        option={{
          background: {
            color: "green",
          },
          fpslimit: 60,
          interactivity: {
            detectOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              denstity: {
                eneble: true,
                area: 1000,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
                value: 1,
              },
            },
          },
        }}
      />
    </>
  );
};

export default ParticleBackground;
