import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import vcards from "../../assets/data/vcard.json";
import { useParams } from "react-router-dom";

const Vcard = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const foundCard = vcards.find((card) => card.id === Number(id));
    setResult(foundCard);
  }, [id]);

  return (
    <div>
      <Card data={result} />
      <ul className="background bg-[#fdfeff] dark:bg-[#32364f]">
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
        <li className="bg-[#f6a6ceda] dark:bg-[#ffffff33]"></li>
      </ul>
    </div>
  );
};

export default Vcard;
