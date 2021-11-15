/* eslint-disable react-hooks/exhaustive-deps */
import "../Styles/AboutMe.css";
import { ReactComponent as Software } from "../SVGs/SoftwareWeb2.svg";
import { ReactComponent as Book } from "../SVGs/Book.svg";
import { ReactComponent as Languages } from "../SVGs/Languages.svg";
import { ReactComponent as Hobbies } from "../SVGs/Hobbies.svg";
import { useRef, useEffect } from "react";

function AboutMe() {
  const textElement = useRef([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("EnterAnimation");
      }
    });
  });

  useEffect(() => {
    if (textElement.current.length < 2) return;
    for (let i = 0; i < textElement.current.length; i++) {
      observer.observe(textElement.current[i]);
    }
  }, [textElement]);

  return (
    <div className="AboutMe">
      <div
        ref={(element) => {
          textElement.current[textElement.current.length] = element;
        }}
        className="Section"
      >
        <h1>About me</h1>
        <p>A short description about me and who I am.</p>
      </div>

      <div
        ref={(element) => {
          textElement.current[textElement.current.length] = element;
        }}
        className="TextContainer"
      >
        <h1>Interests</h1>
        <div>
          <i>
            <Software />
          </i>
          <p>
            I'm a curious and tech loving guy, who wants to learn more and keep
            advancing my knowledge in tech as a whole, but web/software
            development primarily.
          </p>
        </div>
      </div>
      <div
        ref={(element) => {
          textElement.current[textElement.current.length] = element;
        }}
        className="TextContainer"
      >
        <h1>Studies</h1>
        <div>
          <i className="Book">
            <Book />
          </i>
          <p>
            The last 3 years I've been studying System Development in Computer
            Science at the University of Skövde and working on personal projects
            of mine.
          </p>
        </div>
      </div>
      <div
        ref={(element) => {
          textElement.current[textElement.current.length] = element;
        }}
        className="TextContainer"
      >
        <h1>Experience</h1>
        <div>
          <i>
            <Languages />
          </i>
          <p>
            So far I've worked with languages and frameworks such as Java, C#,
            SQL, JavaScript, TypeScript, CSS3, HTML5, React, Sass, NodeJS and
            Json.
          </p>
        </div>
      </div>
      <div
        ref={(element) => {
          textElement.current[textElement.current.length] = element;
        }}
        className="TextContainer"
      >
        <h1>Hobbies</h1>
        <div>
          <i className="Hobbies">
            <Hobbies />
          </i>
          <p>
            Besides from being a tech enthusiast, I like to consider myself a
            sporty person. I'm someone who enjoys generally any kind of ball
            sport, but primarily playing football, I mostly just work out
            though. When I'm not being physically active however, I mostly play
            games with friends and or watching YouTube/Twitch or some new
            series.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
