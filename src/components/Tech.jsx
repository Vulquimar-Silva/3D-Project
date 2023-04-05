import { Tooltip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <Tooltip key={technology.name} content={technology.name}>
            <div className='w-28 h-28 tooltip-arrow' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");