import HorizintalDevider from "./Dividers/Horizontal-devider";
import LeftContent from "./footer-content/left-content";
import LowestLeftContent from "./footer-content/lowest-footer/lowest-left-content";
import LowestRightContent from "./footer-content/lowest-footer/lowest-right-footer";
import RightContent from "./footer-content/right-content";

const LowerFooter: React.FC = () => {
    return (
      <div className="flex flex-row h-[441px] bg-[#222222] pl-8 pr-8">
        <div className="flex flex-col gap-29">
        <div className="flex flex-row gap-50 pt-6">
            <RightContent/>
            <LeftContent/>
        </div>
        <div className="flex flex-col justify-between">
            <HorizintalDevider/>
            <div className="flex flex-row justify-between">
                <LowestLeftContent/>
                <LowestRightContent/>
            </div>
        </div>
        </div>
      </div>
    )
  }
  
  export default LowerFooter;