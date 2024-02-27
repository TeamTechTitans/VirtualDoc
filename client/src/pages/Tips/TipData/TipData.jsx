import { useEffect, useState } from "react";
import TipCard from "../Component/TipBanner/TipCard/TipCard";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TipData = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tips = [], isLoading } = useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tips");
      return res.data;
    },
  });

  if (isLoading) return <div className="w-full h-screen flex justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>

  return (
    <div>
      {tips?.map((tip, idx) => (
        <TipCard key={idx} tip={tip}></TipCard>
      ))}
    </div>
  );
};

export default TipData;
