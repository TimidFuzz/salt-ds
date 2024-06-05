// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type MV_SharpProps = CountrySymbolProps;

const MV_Sharp = forwardRef<SVGSVGElement, MV_SharpProps>(function MV_Sharp(
  props: MV_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="MV_Sharp"
      aria-label="Maldives"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-MV-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-MV-a)`}>
        <path fill="#DD2033" d="M0 0h72v50H0z" />
        <path fill="#005B33" d="M10 9h52v32H10z" />
        <path
          fill="#F5F7F8"
          d="M45 36.205a14.978 14.978 0 0 1-4.346-1.474c-6.54-3.417-8.873-10.839-5.212-16.578 1.524-2.388 3.845-4.108 6.508-5.056C36.806 12.5 31.533 14.683 28.778 19c-3.66 5.739-1.488 13.076 4.853 16.39 3.6 1.88 7.768 2.06 11.369.814Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default MV_Sharp;
