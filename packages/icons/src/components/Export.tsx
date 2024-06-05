// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type ExportIconProps = IconProps;

export const ExportIcon = forwardRef<SVGSVGElement, ExportIconProps>(
  function ExportIcon(props: ExportIconProps, ref) {
    return (
      <Icon
        data-testid="ExportIcon"
        aria-label="export"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M5 1H1v10h4v-1H2V2h3V1Z" />
        <path d="M4 6.5v-1h6.094L7.412 2.82l.707-.707L12.01 6 8.118 9.89l-.707-.707L10.094 6.5H4Z" />
      </Icon>
    );
  },
);
