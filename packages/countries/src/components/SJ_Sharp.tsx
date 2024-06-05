// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SJ_SharpProps = CountrySymbolProps;

const SJ_Sharp = forwardRef<SVGSVGElement, SJ_SharpProps>(function SJ_Sharp(
  props: SJ_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SJ_Sharp"
      aria-label="Svalbard and Jan Mayen"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SJ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SJ-a)`}>
        <path fill="#DD2033" d="M0 0h72v50H0z" />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M20 61h-6V36.7H0v-6h14V19.3H0v-6h14V-11h6v24.3h11.4V-11h6v24.3H72v6H37.4v11.4H72v6H37.4V61h-6V36.7H20V61Zm11.4-41.7H20v11.4h11.4V19.3Z"
          clipRule="evenodd"
        />
        <path fill="#004692" d="M20 61h12V31h40V19H32v-30H20v30H0v12h20v30Z" />
      </g>
    </CountrySymbol>
  );
});

export default SJ_Sharp;
