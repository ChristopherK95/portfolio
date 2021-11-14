import { ReactComponent as GitHub } from "../SVGs/GitHub.svg";
import { ReactComponent as Email } from "../SVGs/Email.svg";
import "../Styles/Links.css";

function Links() {
  return (
    <div className="Links">
      <div>
        <a href="mailto:christopherkarlsson@gmail.com">
          <i>
            <Email />
          </i>
          Email
        </a>
      </div>
      <div>
        <a href="https://github.com/ChristopherK95">
          <i>
            <GitHub />
          </i>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Links;
