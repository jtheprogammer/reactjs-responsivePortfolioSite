import React from "react";
import Particles from "react-tsparticles";

const CustomParticles = ({ children }) => {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 25,
            limit: 20,
            density: {
              enable: true,
              value_area: 100,
            },
          },
          // color: {
          //   value: "#00ff00",
          // },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#ffffff",
            },
            polygon: {
              nb_sides: 0,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              // flicker speed
              speed: 0.5,
              opacity_min: 0.5,
              sync: false,
            },
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            // attract: {
            //   enable: true,
            //   rotateX: 600,
            //   rotateY: 1200,
            // },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 40,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 1,
              speed: 2,
            },
            repulse: {
              distance: 60,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        // background color
        backgroundMask: {
          enable: false,
          cover: {
            // color: {
            //   value: {
            //     r: 255,
            //     g: 153,
            //     b: 100,
            //   },
            // },
          },
        },
        retina_detect: true,
        fps_limit: 60,
      }}
    >
      { children }
    </Particles>
  );
};

export default CustomParticles;
