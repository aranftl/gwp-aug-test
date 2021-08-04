// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 6"}
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
          "M.726 4.325c.4.001.725.324.725.723a.725.725 0 01-.727.72.724.724 0 01-.722-.669L0 5.045c0-.398.326-.72.726-.72zM.73 2.163c.4 0 .725.323.724.722 0 .398-.326.72-.727.72a.724.724 0 01-.722-.669l-.002-.053c0-.398.326-.721.727-.72zM.733 0c.4 0 .725.324.724.722 0 .398-.326.72-.726.72A.724.724 0 01.008.774L.006.72A.724.724 0 01.733 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
