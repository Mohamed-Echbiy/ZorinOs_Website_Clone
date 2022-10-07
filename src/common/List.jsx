import React from "react";
import Link from "../../node_modules/next/link";

function List(props) {
  const { title, items } = props;
  return (
    <div className="list-Container mb-5 mr-5">
      <h3 className=" space_grotesk uppercase secondColor font-semibold mb-7 text-xl">
        {title}
      </h3>
      <div className="items flex flex-col">
        {items.map((e, index) => (
          <Link href="" key={index}>
            <a className="mb-2 color_395571 min-w-fit">{e}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default List;
