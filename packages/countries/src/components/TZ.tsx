// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type TZProps = CountrySymbolProps;

const TZ = forwardRef<SVGSVGElement, TZProps>(function TZ(props: TZProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="TZ"
      aria-label="Tanzania (the United Republic of)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-TZ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-TZ-a)`}>
        <path fill="#009B77" d="M72 0H0v72L72 0Z" />
        <path fill="#0091DA" d="M72 72V0L0 72h72Z" />
        <path
          fill="#FBD381"
          d="M50.85-.063 72.062 21.15 21.15 72.062-.062 50.849z"
        />
        <path
          fill="#31373D"
          d="M67.82 16.908 55.092 4.18 4.18 55.092 16.908 67.82z"
        />
      </g>
    </CountrySymbol>
  );
});

export default TZ;
