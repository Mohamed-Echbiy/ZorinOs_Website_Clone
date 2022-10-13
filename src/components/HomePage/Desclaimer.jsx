import React from "react";

function Desclaimer() {
  return (
    <div className="Desclaimer__container px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40 mt-24">
      <div className="w-3/4 h-px bg-gray-400 mx-auto"></div>
      <p className="mb-5 text-gray-500 text-sm mt-16">
        Slime Rancher © 2015 - 2021 Monomi Park, LLC. All rights reserved.
        Developed and published by Monomi Park, LLC. “Slime Rancher” is a
        registered trademark of Monomi Park, LLC. The game video is copyright of
        Monomi Park, LLC.
      </p>
      <p className="mb-5 text-gray-500 text-sm">
        No Man's Sky © 2016 - 2021 Hello Games Limited. All rights reserved.
        Developed and published by Hello Games Limited. “No Man's Sky” is a
        registered trademark of Hello Games Limited. The game video is copyright
        of Hello Games Limited.
      </p>
      <p className="mb-5 text-gray-500 text-sm">
        Art of Rally © 2020 Funselektor Labs Inc. All rights reserved. Developed
        and published by Funselektor Labs Inc. “Art of Rally” is a registered
        trademark of Funselektor Labs Inc. The game video is copyright of
        Funselektor Labs Inc.
      </p>
    </div>
  );
}

export default Desclaimer;
