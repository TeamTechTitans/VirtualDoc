import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
    const {pathname}=useLocation()
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
    return null
};

export default Scroll;