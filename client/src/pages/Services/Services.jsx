import SiteHeader from "../../components/siteHeader/SiteHeader";
import BestExpert from "./BestExpert";
import BestResults from "./BestResults";
import Laboratory from "./Laboratory";
import Research from "./Research";
import Testing from "./Testing";

const Services = () => {
  return (
    <div>
      <SiteHeader title={"Research"}></SiteHeader>
      <Laboratory></Laboratory>
      <Research></Research>
      <BestResults></BestResults>
      <BestExpert></BestExpert>
      <Testing></Testing>
    </div>
  );
};

export default Services;
