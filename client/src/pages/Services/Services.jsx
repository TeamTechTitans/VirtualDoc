import SiteHeader from "../../components/siteHeader/SiteHeader";
import BestExpert from "./BestExpert";
import BestResult from "./BestResult";
import Laboratory from "./Laboratory";
import Research from "./Research";
import Testing from "./Testing";

const Services = () => {
  return (
    <div>
      <SiteHeader children="Services" title="Home - Research"></SiteHeader>
      <Laboratory></Laboratory>
      <Research></Research>
      <BestResult></BestResult>
      <BestExpert></BestExpert>
      <Testing></Testing>
    </div>
  );
};

export default Services;
