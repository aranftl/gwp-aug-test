// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 27"}
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
        d={
          "M3.385 21.669c.674 0 1.321-.652 1.876-1.837l1.958 6.252c.25.83.666.83.924 0 .26-.8.26-2.134 0-2.963l-1.958-6.252c1.034-4.948.628-11.674-.924-15.023C3.708-1.502 1.62-.168.576 4.81-.468 9.787-.053 16.483 1.5 19.832c.563 1.214 1.22 1.837 1.885 1.837zm0-19.141c1.432 0 2.596 3.733 2.596 8.326 0 4.592-1.164 8.326-2.596 8.326-1.432 0-2.587-3.734-2.587-8.326 0-4.593 1.155-8.326 2.587-8.326z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
