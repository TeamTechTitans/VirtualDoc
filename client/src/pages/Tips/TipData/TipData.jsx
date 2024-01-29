import { useEffect, useState } from "react";
import TipCard from "../Component/TipBanner/TipCard/TipCard";


const TipData = () => {
    const [tips, setTips] = useState([])

    useEffect(() => {
        fetch('tips.json')
            .then(res => res.json())
            .then(data => setTips(data))
    }, [])


    return (
        <div>
            {
                tips?.map(tip => <TipCard key={tip.id} tip={tip}></TipCard>)
            }
        </div>
    );
};

export default TipData;