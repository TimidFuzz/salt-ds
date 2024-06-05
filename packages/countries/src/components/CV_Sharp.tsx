// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type CV_SharpProps = CountrySymbolProps;

const CV_Sharp = forwardRef<SVGSVGElement, CV_SharpProps>(function CV_Sharp(
  props: CV_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="CV_Sharp"
      aria-label="Cabo Verde"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-CV-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-CV-a)`}>
        <path fill="#004692" d="M0 0h72v50H0z" />
        <path fill="#F5F7F8" d="M0 40V22h72v18z" />
        <path fill="#DD2033" d="M0 34v-6h72v6z" />
        <path
          fill="#F1B434"
          d="m15.386 27.114-1.01 2.283L12 29.7l1.753 1.714-.46 2.47 2.093-1.41 2.093 1.41-.46-2.47 1.753-1.714-2.377-.304-1.009-2.283Zm2.539-6.283 1.009-2.283 1.01 2.283 2.376.304-1.753 1.714.46 2.471-2.093-1.41-2.093 1.41.46-2.47-1.753-1.715 2.377-.304Zm8.565-3.548L27.5 15l1.01 2.283 2.376.304-1.753 1.714.46 2.47-2.093-1.41-2.093 1.41.46-2.47-1.753-1.714 2.377-.304Zm-8.565 20.68 1.009-2.283 1.01 2.283 2.376.304-1.753 1.714.46 2.47-2.093-1.41-2.093 1.41.46-2.47-1.753-1.714 2.377-.304Zm9.575 1.265-1.01 2.283-2.376.304 1.753 1.715-.46 2.47 2.093-1.41L29.593 46l-.46-2.47 1.753-1.715-2.377-.304-1.009-2.283Zm7.557-1.265 1.009-2.283 1.01 2.283 2.376.304-1.753 1.714.46 2.47-2.093-1.41-2.093 1.41.46-2.47-1.753-1.714 2.377-.304Zm4.557-10.849-1.01 2.283-2.376.304 1.753 1.714-.46 2.47 2.093-1.41 2.093 1.41-.46-2.47L43 29.701l-2.377-.304-1.009-2.283Zm-4.557-6.283 1.009-2.283 1.01 2.283 2.376.304-1.753 1.714.46 2.471-2.093-1.41-2.093 1.41.46-2.47-1.753-1.715 2.377-.304Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default CV_Sharp;
