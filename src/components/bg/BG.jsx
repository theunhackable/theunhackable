import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const BG = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
    <div style={{ position: "fixed",
        width: "100%",
        zIndex: -1}}>
        
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    "particles": {
                      "number": {
                        "value": 231,
                        "density": {
                          "enable": true,
                          "value_area": 1523.2414578222467
                        }
                      },
                      "color": {
                        "value": "#43b1ff"
                      },
                      "shape": {
                        "type": "polygon",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 7
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.41688713582503595,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 4.872463273808071,
                          "size_min": 0,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 500,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 2
                      },
                      "move": {
                        "enable": true,
                        "speed": 0.5,
                        "direction": "bottom-right",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "window",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 0.5
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 4,
                          "duration": 0.3,
                          "opacity": 1,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }
            }
        />
    </div>

    );
};

export default BG;