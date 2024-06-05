// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type MoveVerticalIconProps = IconProps;

export const MoveVerticalIcon = forwardRef<
  SVGSVGElement,
  MoveVerticalIconProps
>(function MoveVerticalIcon(props: MoveVerticalIconProps, ref) {
  return (
    <Icon
      data-testid="MoveVerticalIcon"
      aria-label="move vertical"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path d="M5.505 4.993V1.905L3.707 3.699 3 2.993 5.997.001l3.004 2.998-.708.706-1.814-1.81v3.098h-.974Zm.99 2.016v3.088l1.798-1.795.708.707L6.003 12 3 9.003l.708-.707 1.814 1.811V7.01h.974Z" />
    </Icon>
  );
});
