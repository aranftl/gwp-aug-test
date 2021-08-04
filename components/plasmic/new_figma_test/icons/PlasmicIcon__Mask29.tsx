// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask29Icon(props: Mask29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 15"}
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
          "M7.846 8.009a3.633 3.633 0 001.48-2.924V3.632C9.326 1.629 7.717 0 5.74 0 3.761 0 2.152 1.63 2.152 3.632v1.453c0 1.202.587 2.262 1.48 2.924C1.614 8.109 0 9.788 0 11.854v1.163c0 .832.67 1.51 1.492 1.51h8.494c.822 0 1.492-.678 1.492-1.51v-1.163c0-2.066-1.614-3.745-3.632-3.845zm2.197 5.01a.058.058 0 01-.057.057H1.492a.058.058 0 01-.057-.058v-1.162c0-1.33 1.068-2.412 2.381-2.412h3.846c1.313 0 2.381 1.082 2.381 2.412v1.162zM5.74 1.45c-1.186 0-2.152.978-2.152 2.18v1.452c0 1.201.966 2.18 2.152 2.18 1.187 0 2.152-.979 2.152-2.18V3.63c0-1.201-.965-2.179-2.152-2.179z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask29Icon;
/* prettier-ignore-end */
