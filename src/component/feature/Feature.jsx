import '../feature/feature.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Feature = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={90} text={"90%"} strokeWidth={6} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$3420</p>
        <p className="desc">
          Next transactions processing. Last payments may  be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$512.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Next Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$612.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Next Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$812.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;