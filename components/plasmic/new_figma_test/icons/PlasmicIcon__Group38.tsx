// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group38Icon(props: Group38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 6"}
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
          "M1.645 0c.85 0 1.444.587 1.444 1.44 0 .858-.605 1.448-1.466 1.448H.681v1.499H0V0h1.645zM.68 2.316h.781c.593 0 .93-.319.93-.872 0-.553-.337-.87-.927-.87H.681v1.742zm2.588 1.162c0-.559.428-.903 1.188-.945l.876-.052v-.246c0-.356-.24-.568-.642-.568-.38 0-.617.182-.675.468h-.62c.037-.578.53-1.004 1.32-1.004.775 0 1.27.41 1.27 1.052v2.204h-.629v-.526h-.015c-.186.356-.59.581-1.01.581-.626 0-1.063-.39-1.063-.964zm2.064-.288v-.253l-.788.049c-.392.027-.614.2-.614.474 0 .28.231.462.584.462.459 0 .818-.316.818-.732zM6.58 5.563v-.532c.048.012.157.012.212.012.304 0 .468-.127.568-.456 0-.006.058-.194.058-.197L6.263 1.189h.711l.809 2.602h.012l.809-2.602h.693L8.099 4.554c-.274.775-.59 1.024-1.252 1.024a2.54 2.54 0 01-.268-.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group38Icon;
/* prettier-ignore-end */
