// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
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
          "M.604 3.6a.601.601 0 11-.001 1.2.602.602 0 01-.601-.557L0 4.198c0-.33.271-.6.604-.599zm.003-1.8c.333 0 .603.269.603.6 0 .332-.271.6-.605.6a.602.602 0 01-.6-.557L.002 2.4c0-.331.27-.6.604-.6zM.61 0a.6.6 0 11-.002 1.2.602.602 0 01-.601-.556L.005.599c0-.331.271-.6.605-.599z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
