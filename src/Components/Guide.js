import "../Styles/Guide.css";

function Guide({ refs }) {
  function scroll(value) {
    const pos = refs[value].current.offsetTop;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }

  return (
    <div className="Guide">
      <h2 onClick={() => scroll(0)}>Home</h2>
      <h2 onClick={() => scroll(1)}>About me</h2>
      <h2 onClick={() => scroll(2)}>Projects</h2>
      <div className="Line"></div>
    </div>
  );
}

export default Guide;
