// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask56Icon(props: Mask56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 19"}
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
          "M9.861 10.066a4.566 4.566 0 001.86-3.676V4.564C11.721 2.048 9.699 0 7.213 0S2.705 2.048 2.705 4.564V6.39c0 1.512.737 2.844 1.859 3.676C2.03 10.19 0 12.3 0 14.898v1.46c0 1.047.842 1.9 1.875 1.9H12.55c1.034 0 1.876-.853 1.876-1.9v-1.46c0-2.597-2.03-4.707-4.565-4.832zm2.76 6.294c0 .04-.032.073-.071.073H1.875a.073.073 0 01-.072-.073V14.9c0-1.672 1.342-3.03 2.993-3.03h4.833c1.65 0 2.993 1.358 2.993 3.03v1.46zM7.214 1.824c-1.49 0-2.704 1.228-2.704 2.738v1.826c0 1.51 1.213 2.739 2.704 2.739 1.492 0 2.705-1.229 2.705-2.739V4.562c0-1.51-1.213-2.738-2.705-2.738z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask56Icon;
/* prettier-ignore-end */
