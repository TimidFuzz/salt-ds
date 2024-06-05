// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AF_SharpProps = CountrySymbolProps;

const AF_Sharp = forwardRef<SVGSVGElement, AF_SharpProps>(function AF_Sharp(
  props: AF_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AF_Sharp"
      aria-label="Afghanistan"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AF-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AF-a)`}>
        <path fill="#31373D" d="M0 0h20v50H0z" />
        <path fill="#DD2033" d="M20 0h32v50H20z" />
        <path fill="#005B33" d="M52 0h20v50H52z" />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M50 23c0 7.732-6.268 14-14 14s-14-6.268-14-14c0-3.035.966-5.845 2.607-8.138l3.255 2.325A9.954 9.954 0 0 0 26 23c0 5.523 4.477 10 10 10s10-4.477 10-10c0-2.168-.69-4.175-1.862-5.813l3.255-2.325A13.936 13.936 0 0 1 50 23ZM35.97 9h.06a14.8 14.8 0 0 0-.06 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M39 19a3 3 0 1 0-6 0v6h6v-6Zm-3-6a6 6 0 0 1 6 6v9H30v-9a6 6 0 0 1 6-6Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default AF_Sharp;
