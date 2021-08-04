// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask48Icon(props: Mask48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.296.827a.38.38 0 01.519 0l.518.515c.069.069.107.16.107.258a.36.36 0 01-.107.258l-.259.258-1.038-1.032.26-.257zM1.085 5.408l.32.318.32.318-.854.212.214-.848zm3.432-3.81l.52.516.518.515-3.113 3.095-.519-.516-.518-.516 3.112-3.094zM.367 7.12a.38.38 0 00.089-.011l2.075-.516c.011-.003.02-.009.031-.012a.357.357 0 00.138-.083h.002l3.632-3.61.518-.516a1.08 1.08 0 00.322-.774 1.08 1.08 0 00-.322-.773L6.334.309c-.415-.412-1.143-.412-1.557 0l-.519.516-3.632 3.61v.001a.366.366 0 00-.083.134c-.004.012-.01.022-.013.034L.01 6.667a.364.364 0 00.357.453zm2.075-2.427a.367.367 0 00.519 0l1.557-1.547a.363.363 0 000-.516.368.368 0 00-.52 0L2.443 4.177a.363.363 0 000 .516"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask48Icon;
/* prettier-ignore-end */
