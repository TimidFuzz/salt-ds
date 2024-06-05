// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";

import { Icon, type IconProps } from "../icon";

export type BankCheckIconProps = IconProps;

export const BankCheckIcon = forwardRef<SVGSVGElement, BankCheckIconProps>(
  function BankCheckIcon(props: BankCheckIconProps, ref) {
    return (
      <Icon
        data-testid="BankCheckIcon"
        aria-label="bank check"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M12 2H0v8h12V2Zm-1 2H1v5h10V4Z"
          clipRule="evenodd"
        />
        <path d="M2 7h7v1H2V7Zm0-2h4v1H2V5Zm6 0h2v1H8V5Z" />
      </Icon>
    );
  },
);
