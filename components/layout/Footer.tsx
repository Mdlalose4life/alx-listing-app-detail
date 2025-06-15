import LowerFooter from "@/components/footer-components/lower-footer";
import UpperFooter from "@/components/footer-components/upper-footer";

const Footer: React.FC = () => {
    return (
      <div className="flex flex-col">
        <UpperFooter/>
        <LowerFooter/>
      </div>
    )
  }
  
  export default Footer;