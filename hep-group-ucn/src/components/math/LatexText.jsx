"use client";

import { Fragment } from "react";
import { InlineMath } from "react-katex";

const LATEX_EXPRESSION = /(\$\$[\s\S]+?\$\$|\$(?:\\.|[^$\\])+\$)/g;

export default function LatexText({ children }) {
  const value = String(children ?? "");
  const parts = value.split(LATEX_EXPRESSION);

  return parts.map((part, index) => {
    const isDisplayMath = part.startsWith("$$") && part.endsWith("$$");
    const isInlineMath =
      !isDisplayMath && part.startsWith("$") && part.endsWith("$");

    if (!isDisplayMath && !isInlineMath) {
      return <Fragment key={index}>{part}</Fragment>;
    }

    const delimiterSize = isDisplayMath ? 2 : 1;
    const expression = part.slice(delimiterSize, -delimiterSize);

    return (
      <InlineMath
        key={index}
        math={expression}
        renderError={() => <span>{part}</span>}
      />
    );
  });
}
