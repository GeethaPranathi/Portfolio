import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Subtly connects lines to mouse
            parallax: {
              enable: true,
              force: 30,
              smooth: 10,
            }
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.2,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#d4af79", // Gold/Amber from theme
        },
        links: {
          color: "#d4af79",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3, // VERY slow
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 800,
          },
          value: 60, // Not too many to distract
        },
        opacity: {
          value: { min: 0.1, max: 0.4 }, // Soft glowing orbs
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Tiny particles
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          }
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <>
      {/* Soft glowing orbs in the background */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-violet/5 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/2 -right-40 h-[40rem] w-[40rem] rounded-full bg-amber/5 blur-[120px]" />
      
      {/* The particles canvas */}
      <Particles
        id="tsparticles"
        className="pointer-events-none fixed inset-0 z-0"
        options={options}
      />
    </>
  );
}
