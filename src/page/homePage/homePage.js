import "./homePage.css";
import data from ".././../Icons/Data-Analysis.png";

const HomePage = () => {
  return (
    <div id="homePage">
      <div>
        <h1>Upcoming Certificate</h1>
        <div id="homePage-Analysis">
          <div id="AnalysisImg">
            <div id="AnalysisLogo">
              <img src={data} style={{ width: "50px" }} />
            </div>
            <div>
              <h1>DATA ANALYSIS CERTIFICATE</h1>
              <p className="a">COMPLETED | 21 MAR 2022</p>
            </div>
          </div>
          <div>
            <button>VIEW EXAM STRUCTURE DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
