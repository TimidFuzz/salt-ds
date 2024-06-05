// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type HT_SharpProps = CountrySymbolProps;

const HT_Sharp = forwardRef<SVGSVGElement, HT_SharpProps>(function HT_Sharp(
  props: HT_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="HT_Sharp"
      aria-label="Haiti"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-HT-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-HT-a)`}>
        <path fill="#004692" d="M72 0v25H0V0z" />
        <path fill="#DD2033" d="M72 25v25H0V25z" />
        <path fill="#F5F7F8" d="M20 10h32v30H20z" />
        <path
          fill="#004692"
          d="M34.607 39.691a9.433 9.433 0 0 1-2.232-.477 9.463 9.463 0 0 1-3.898-1.237A9.5 9.5 0 0 1 25 25l1.446.835a9.473 9.473 0 0 1 2.048-3.048l1.378 1.379a9.49 9.49 0 0 1 2.344-1.905l3.922 6.794L40.21 22a9.5 9.5 0 0 1 2.171 1.716l.993-.992c.931.93 1.64 2 2.128 3.14L47 25c2.761 4.783 1.123 10.899-3.66 13.66a9.955 9.955 0 0 1-5.769 1.311 9.527 9.527 0 0 1-2.964-.28Z"
        />
        <path fill="#008259" d="m20 40 11.61-7.62a8 8 0 0 1 8.78 0L52 40H20Z" />
        <path fill="#936846" d="M35.4 19h2v14h-2z" />
        <path
          fill="#009B77"
          d="m36.9 12 1.6 3.431 3.613-.856-1.618 3.422L43.4 20.36l-3.617.837.01 3.803-2.893-2.38L34.007 25l.01-3.803-3.617-.837 2.905-2.363-1.618-3.422 3.613.856L36.9 12Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default HT_Sharp;
