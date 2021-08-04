// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask71Icon(props: Mask71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 9"}
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
          "M.876 8.757h4.378a.877.877 0 00.876-.876V6.567c0-.938-.594-1.74-1.426-2.051.356-.404.55-.914.55-1.451v-.876a2.19 2.19 0 00-4.378 0v.876c0 .54.201 1.056.55 1.45A2.192 2.192 0 000 6.567v1.314c0 .483.393.876.876.876zm1.258-7.49a1.32 1.32 0 011.858-.005c.25.253.386.584.386.932v.876a1.313 1.313 0 01-.653 1.134.438.438 0 00-.222.38v.237c0 .242.196.438.437.438.725 0 1.314.59 1.314 1.313v1.314H.876V6.572c0-.724.589-1.313 1.313-1.313a.438.438 0 00.438-.438v-.236a.438.438 0 00-.22-.38 1.312 1.312 0 01-.656-1.135v-.876c0-.348.137-.679.383-.927zm1.29 4.817l.233-.232a.22.22 0 00-.155-.374h-.875a.219.219 0 00-.155.374l.233.232-.286.857a.219.219 0 00.053.224l.438.438a.218.218 0 00.31 0l.437-.438a.219.219 0 00.053-.224l-.286-.857z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask71Icon;
/* prettier-ignore-end */
