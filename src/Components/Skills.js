import { ReactComponent as Electron } from "../SVGs/Electron.svg";
import { ReactComponent as TS } from "../SVGs/TypeScript.svg";
import { ReactComponent as Sass } from "../SVGs/Sass.svg";
import { ReactComponent as CSharp } from "../SVGs/C#.svg";
import { ReactComponent as React } from "../SVGs/React.svg";
import "../Styles/Skills.css";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skill" data-tooltip="React">
        <i>
          <React />
        </i>
      </div>
      <div className="Skill" data-tooltip="C-Sharp">
        <i>
          <CSharp />
        </i>
      </div>
      <div className="Skill" data-tooltip="Sass">
        <i>
          <Sass />
        </i>
      </div>
      <div className="Skill" data-tooltip="Learning Electron">
        <i>
          <Electron />
        </i>
      </div>
      <div className="Skill" data-tooltip="Getting used to TypeScript">
        <i>
          <TS />
        </i>
      </div>
    </div>
  );
}

export default Skills;
