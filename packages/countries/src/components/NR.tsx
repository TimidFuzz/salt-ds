// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type NRProps = CountrySymbolProps;

const NR = forwardRef<SVGSVGElement, NRProps>(function NR(props: NRProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="NR"
      aria-label="Nauru"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-NR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-NR-a)`}>
        <path fill="#004692" d="M0 0h72v72H0z" />
        <path fill="#F1B434" d="M0 41V31h72v10z" />
        <path
          fill="#F5F7F8"
          d="m32.4 54-3.678 1.819 1.959 3.743-3.994-.803L26.181 63 23.4 59.881 20.618 63l-.506-4.24-3.993.802 1.958-3.744L14.4 54l3.678-1.819-1.959-3.743 3.993.803L20.62 45l2.78 3.119L26.182 45l.506 4.24 3.994-.802-1.959 3.744L32.4 54Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default NR;
