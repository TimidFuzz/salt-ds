// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type FolderClosedSolidIconProps = IconProps;

export const FolderClosedSolidIcon = forwardRef<
  SVGSVGElement,
  FolderClosedSolidIconProps
>(function FolderClosedSolidIcon(props: FolderClosedSolidIconProps, ref) {
  return (
    <Icon
      data-testid="FolderClosedSolidIcon"
      aria-label="folder closed solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2v10H0V1h4l2 1h6Zm-1 3V4H1v1h10Z"
        clipRule="evenodd"
      />
    </Icon>
  );
});
