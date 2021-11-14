import "../Styles/Console.css";

function Console() {
  return (
    <div className="Console">
      <div className="Top">
        <div className="Circle"></div>
        <div className="Circle"></div>
        <div className="Circle"></div>
      </div>
      <div className="Content">
        <p className="Row one">WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK</p>
        <p className="Row two">Password Required:</p>
        <p className="Row three">{">"}***********</p>
        <p className="Row four">Hello! My name is Christopher.</p>
        <p className="Row five">
          I'm an unexperienced programmer/software developer, who's
        </p>
        <p className="Row six">
          constantly trying to learn new skills and improve on my
        </p>
        <p className="Row seven">current ones to become a better developer.</p>
        <p className="Row eight">And this is my portfolio.</p>
      </div>
    </div>
  );
}

export default Console;
