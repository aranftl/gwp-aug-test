// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask3Icon(props: Mask3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M4.945 5.047a2.29 2.29 0 00.932-1.843V2.29C5.877 1.027 4.863 0 3.617 0c-1.247 0-2.26 1.027-2.26 2.289v.915c0 .758.37 1.426.932 1.843A2.42 2.42 0 000 7.47v.733c0 .524.422.952.94.952h5.353c.518 0 .94-.428.94-.952V7.47a2.42 2.42 0 00-2.288-2.423zM6.33 8.204c0 .02-.016.037-.036.037H.94a.037.037 0 01-.036-.037v-.732c0-.839.673-1.52 1.5-1.52H4.83c.828 0 1.5.681 1.5 1.52v.732zM3.618.914c-.748 0-1.357.617-1.357 1.374v.915c0 .758.609 1.374 1.357 1.374.747 0 1.356-.616 1.356-1.374v-.915c0-.757-.609-1.373-1.356-1.373z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask3Icon;
/* prettier-ignore-end */
