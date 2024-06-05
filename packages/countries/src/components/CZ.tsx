// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type CZProps = CountrySymbolProps;

const CZ = forwardRef<SVGSVGElement, CZProps>(function CZ(props: CZProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="CZ"
      aria-label="Czechia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-CZ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-CZ-a)`}>
        <path fill="#DD2033" d="M0 72V36h72v36z" />
        <path fill="#F5F7F8" d="M0 36V0h72v36z" />
        <path fill="#004692" d="M48 36 0 0v72l48-36Z" />
      </g>
    </CountrySymbol>
  );
});

export default CZ;
