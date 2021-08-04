// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicMobileControlright,
  DefaultMobileControlrightProps
} from "./plasmic/new_figma_test/PlasmicMobileControlright";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface MobileControlrightProps extends Omit<DefaultMobileControlrightProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultMobileControlrightProps altogether and have
// total control over the props for your component.
interface MobileControlrightProps extends DefaultMobileControlrightProps {}

function MobileControlright_(
  props: MobileControlrightProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicMobileControlright to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicMobileControlright are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all MobileControlrightProps here, but feel free
  // to do whatever works for you.

  return <PlasmicMobileControlright root={{ ref }} {...props} />;
}

const MobileControlright = React.forwardRef(MobileControlright_);
export default MobileControlright;
