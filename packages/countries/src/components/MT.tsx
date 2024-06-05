// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MTProps = CountrySymbolProps;

const MT = forwardRef<SVGSVGElement, MTProps>(function MT(props: MTProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MT"
      aria-label="Malta"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-MT-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-MT-a)`}>
        <path fill="#DD2033" d="M71.6 72h-36V0h36z" />
        <path fill="#F5F7F8" d="M35.6 72h-36V0h36z" />
        <path fill="#C1C3C3" d="M22.8 13.6h-6v7h-7v6h7v7h6v-7h7v-6h-7v-7Z" />
      </g>
    </CountrySymbol>
  );
});

export default MT;
