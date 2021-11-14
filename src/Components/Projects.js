/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import "../Styles/Projects.css";
import { ReactComponent as GitHub } from "../SVGs/GitHub.svg";
import { ReactComponent as CSharp } from "../SVGs/C#.svg";
import { ReactComponent as React } from "../SVGs/React.svg";
import { ReactComponent as Image } from "../SVGs/Image.svg";
import { ReactComponent as Xaml } from "../SVGs/Xaml.svg";
import { ReactComponent as Json } from "../SVGs/Json.svg";
import { ReactComponent as Sass } from "../SVGs/Sass.svg";
import { ReactComponent as NodeJs } from "../SVGs/NodeJs.svg";
import { ReactComponent as SocketIO } from "../SVGs/SocketIO.svg";

function Projects() {
  const projectElement = useRef([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("EnterAnimation");
        entry.target.childNodes[0].style.display = "flex";
      }
    });
  });

  useEffect(() => {
    if (projectElement.current.length < 3) return;
    for (let i = 0; i < projectElement.current.length; i++) {
      observer.observe(projectElement.current[i]);
    }
  }, [projectElement]);

  return (
    <div className="Projects">
      <div className="ProjContainer">
        <div
          ref={(element) => {
            projectElement.current[projectElement.current.length] = element;
          }}
          className="Section"
        >
          <h1>My Projects</h1>
          <p>My own personal projects.</p>
        </div>

        <div className="Card-Container">
          <div
            ref={(element) => {
              projectElement.current[projectElement.current.length] = element;
            }}
            className="ProjectCard"
          >
            <div className="Tools">
              <i data-title="React">
                <React />
              </i>
              <i data-title="Sass">
                <Sass />
              </i>
              <i data-title="NodeJS">
                <NodeJs />
              </i>
              <i data-title="Socket.io">
                <SocketIO />
              </i>
            </div>
            <img className="Preview" src="./Images/Minesweeper.png" alt="" />
            <h1 className="Title">Minesweeper Vs</h1>
            <p className="Description">
              Minesweeper Vs(Versus), is a 1v1 multiplayer take on the classic
              game Minesweeper. It's turn-based with each round being time
              limited. A player will try to avoid bombs and click on tiles with
              as many surrounding bombs as possible, as the more bombs around
              the tile, the more points. The player with the most points wins.
            </p>
            <div className="Buttons">
              <a href="https://github.com/ChristopherK95/MinesweeperVs">
                <button className="Github">
                  <i>
                    <GitHub />
                  </i>
                </button>
              </a>
              <a href="https://minesweeper-versus-client.herokuapp.com/">
                <button className="Visit">Visit</button>
              </a>
            </div>
            <p className="Heroku">*Server needs 30-60s to boot up!</p>
          </div>

          <div
            ref={(element) => {
              projectElement.current[projectElement.current.length] = element;
            }}
            className="ProjectCard"
          >
            <div className="Tools">
              <i data-title="C-Sharp">
                <CSharp />
              </i>
              <i data-title="Json">
                <Json />
              </i>
              <i data-title="Xaml">
                <Xaml />
              </i>
            </div>
            <img className="Preview" src="./Images/TwitchTrack.png" alt="" />
            <h1 className="Title">TwitchTrack</h1>
            <p className="Description">
              This is an application built with WPF. Its function is to show the
              current live/offline status of a select amount of streamers that
              the user have choosen and make notifications when one or more of
              these streamers go either live or offline.
            </p>
            <div className="Buttons">
              <a href="https://github.com/ChristopherK95/TwitchTrack">
                <button className="Github">
                  <i>
                    <GitHub />
                  </i>
                </button>
              </a>
              <a href="https://github.com/ChristopherK95/TwitchTrack/releases/latest">
                <button className="Visit">Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
