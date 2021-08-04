// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask18Icon(props: Mask18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M0 3.624c0 .222.18.403.403.403h2.013c.222 0 .403-.18.403-.403V3.02c0-.432-.273-.8-.656-.943.164-.186.253-.42.253-.668v-.402A1.009 1.009 0 001.409 0 1.01 1.01 0 00.403 1.007v.402c0 .25.092.486.253.667A1.008 1.008 0 000 3.02v.604zM.981.58a.607.607 0 01.855-.002.607.607 0 01.177.428v.403a.604.604 0 01-.3.521.201.201 0 00-.102.175v.109c0 .111.09.201.201.201.333 0 .604.271.604.604v.604H.403V3.02c0-.333.27-.604.604-.604.11 0 .201-.09.201-.201v-.109a.201.201 0 00-.1-.174.603.603 0 01-.303-.522v-.403c0-.16.063-.312.176-.426zm.593 2.217l.107-.107a.1.1 0 00-.07-.172h-.403a.1.1 0 00-.072.172l.107.107-.13.394a.1.1 0 00.024.103l.2.201a.1.1 0 00.143 0l.202-.201a.1.1 0 00.024-.103l-.132-.394z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask18Icon;
/* prettier-ignore-end */
