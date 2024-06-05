// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SIProps = CountrySymbolProps;

const SI = forwardRef<SVGSVGElement, SIProps>(function SI(props: SIProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SI"
      aria-label="Slovenia"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-SI-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-SI-a)`}>
        <path fill="#DD2033" d="M0 72V48h72v24z" />
        <path fill="#005EB8" d="M0 48V24h72v24z" />
        <path fill="#F5F7F8" d="M0 24V0h72v24z" />
        <path
          fill="#005EB8"
          d="M15 14h20v7.941a14.857 14.857 0 0 1-9.34 13.795L25 36l-.66-.264A14.857 14.857 0 0 1 15 21.94V14Z"
        />
        <mask
          id={`${uid}-SI-b`}
          x="15"
          y="14"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#2F80ED"
            d="M15 14h20v7.941a14.857 14.857 0 0 1-9.34 13.795L25 36l-.66-.264A14.857 14.857 0 0 1 15 21.94V14Z"
          />
        </mask>
        <g mask={`url(#${uid}-SI-b)`}>
          <path
            fill="#F5F7F8"
            d="M29.059 24.68 25.2 19l-3.858 5.68L20.2 23l-8.66 12.75H23V36h5v-.25h10.86L30.2 23l-1.141 1.68Z"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default SI;
