"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const getColorByTheme = (theme) => {
    switch (theme) {
      case "dark":
        return "#FFFFFF";
      case "tokyo":
        return "#FF5733";
      case "ocean":
        return "#1E90FF";
      case "light":
        return "#000000";
      case "system":
        return "#FFFFFF";
      default:
        return "#000000";
    }
  };

  const options = useMemo(
    () => ({
      background: {},
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: getColorByTheme(theme),
        },
        links: {
          color: getColorByTheme(theme),
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 86,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "star",
          polygon: {
            sides: 5,
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <div style={{ opacity: 0.5 }}>
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;
