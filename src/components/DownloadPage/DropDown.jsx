import React, { useState } from "react";
import { ArrowDown, Close } from "../../Icons/Icons";

function DropDown({ title, desc, iscore, islite, ispro, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`Dropdown_container relative overflow-hidden p-5 ${bgColor} drop-shadow-lg mb-3 w-full md:w-2/5 xl:w-1/4 md:mr-3 flex-grow`}
    >
      <div className="dropDown__header p-5 flex max-w-lg items-center justify-between mx-auto z-20">
        <div className="text mr-2">
          <h3 className="title sm:text-lg font-bold ">{title}</h3>
          <p className="description text-sm sm:text-base">{desc && desc}</p>
        </div>
        <div className="icon" onClick={() => setIsOpen((pre) => !pre)}>
          {!isOpen ? <ArrowDown /> : <Close />}
        </div>
      </div>
      <div
        className={`dropDown__body border-t-2 border-solid border-gray-300 w-full max-w-lg mx-auto  ${
          !isOpen ? "Drop_close" : "Drop_open"
        }`}
      >
        <table className="w-full">
          <tr className="table_head">
            <th className="pro_head py-2">Pro</th>
            <th className="core_head">Core</th>
            <th className="lite_head">Lite</th>
          </tr>
          <tbody className=" border-2 border-solid border-gray-400 text-center">
            <td className="border-r-2 border-solid border-gray-400 py-4">
              {ispro ? "✅" : ""}
            </td>
            <td className="border-r-2 border-solid border-gray-400 py-4">
              {iscore ? "✅" : ""}
            </td>
            <td>{islite ? "✅" : ""}</td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DropDown;
