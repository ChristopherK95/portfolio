/* eslint-disable react-hooks/exhaustive-deps */
import "./Styles/App.css";
import Links from "./Components/Links";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { ReactComponent as Leaf1 } from "./SVGs/Leaf1.svg";
import { ReactComponent as Leaf2 } from "./SVGs/Leaf2.svg";
import { ReactComponent as GitHub } from "./SVGs/GitHub.svg";
import { useRef, useEffect } from "react";

function App() {
  const endRef = useRef([]);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("EnterAnimation");
      }
    });
  });

  useEffect(() => {
    console.log(aboutRef);
    observer.observe(endRef.current);
  }, []);

  return (
    <div className="App">
      <div className="Top-Bar">
        <div className="Container">
          <h2
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </h2>
          <h2
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About me
          </h2>
          <h2
            onClick={() =>
              projectRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </h2>
          <h2
            onClick={() =>
              endRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact me
          </h2>
          <a href="https://github.com/ChristopherK95">
            <button>
              <i>
                <GitHub />
              </i>
              See my GitHub
            </button>
          </a>
        </div>
      </div>
      <div className="Intro-Page">
        <div className="Intro">
          <img className="Profile-Pic" src="./Images/Profile3.jpg" alt="" />
          <p className="Greeting">Hello! 👋</p>
          <h1 id="Title">I am Christopher</h1>
          <h2 className="Sub-Title">I'm a software/web developer</h2>
          <p>
            I'm a software and web developer with knowledge in React and C#.
          </p>
        </div>
        <div className="Intro-Skills">
          <i className="Blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="50%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#323232", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#282a2d", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad1)"
                d="M46.4,-75.4C60.5,-72.2,72.7,-60.6,79.5,-46.6C86.2,-32.7,87.5,-16.3,83.4,-2.4C79.3,11.6,69.7,23.2,62,35.4C54.2,47.6,48.3,60.5,38.3,67.1C28.2,73.7,14.1,74.2,-1.2,76.3C-16.5,78.4,-33.1,82.2,-42.1,74.9C-51,67.7,-52.5,49.4,-56.2,35.1C-59.9,20.7,-65.8,10.4,-68.5,-1.5C-71.2,-13.5,-70.6,-26.9,-63.2,-34.9C-55.8,-42.8,-41.7,-45.3,-30,-50C-18.4,-54.7,-9.2,-61.6,3.5,-67.6C16.1,-73.6,32.2,-78.7,46.4,-75.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </i>
          <div className="Skills">
            <h1 className="Sub-Title">Top Skills</h1>
            <div>
              <h2 className="Skill">ReactJs</h2>
              <h2 className="Skill">Sass</h2>
              <h2 className="Skill">C#</h2>
            </div>
          </div>
          <div className="Skills">
            <h1 className="Sub-Title">Currently Learning</h1>
            <div>
              <h2 className="Skill">TypeScript</h2>
              <h2 className="Skill">Electron</h2>
            </div>
          </div>
        </div>
        <a className="GitHub-Mobile" href="https://github.com/ChristopherK95">
          <h2>Visit my GitHub!</h2>
          <button>
            <i>
              <GitHub />
            </i>
            GitHub
          </button>
        </a>
        <div className="Curve1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="Content">
        <i className="Leaf1">
          <Leaf1 />
        </i>
        <i className="Leaf2">
          <Leaf2 />
        </i>
        <i className="Leaf3">
          <Leaf1 />
        </i>
        <i className="Leaf4">
          <Leaf2 />
        </i>
        <i className="Leaf5">
          <Leaf2 />
        </i>
        <i className="Leaf6">
          <Leaf2 />
        </i>
        <div ref={aboutRef} className="Page AboutPage">
          <AboutMe />
        </div>
        <div ref={projectRef} className="Page ProjectsPage">
          <Projects />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1636569675">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div ref={endRef} className="End">
        <h2>Send a message</h2>
        <Links />
        <p>
          Designed & Created by Christopher Karlsson, 2021 Built with React &
          Sass
        </p>
      </div>
    </div>
  );
}

export default App;
