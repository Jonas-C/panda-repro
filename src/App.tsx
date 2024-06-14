import { ComponentPropsWithoutRef, forwardRef } from "react";
import { styled } from "../styled-system/jsx";
import { css, cx } from "../styled-system/css";
import { WithCss } from "../styled-system/types";

interface Props extends ComponentPropsWithoutRef<"input">, WithCss {}

export const YellowInput = forwardRef<HTMLInputElement, Props>(
  ({ css: cssProp, className, ...props }, ref) => {
    return (
      <input
        className={cx(
          css(
            { backgroundColor: "yellow", width: "sm", height: "sm" },
            cssProp,
          ),
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

export const GreenInput = styled("input", {
  base: {
    backgroundColor: "green",
    width: "sm",
    height: "sm",
  },
});

const RedInput = styled(YellowInput, {
  base: {
    backgroundColor: "red",
  },
});

const BlueInput = styled(GreenInput, {
  base: {
    backgroundColor: "blue",
  },
});

function App() {
  return (
    <div>
      <RedInput placeholder="red input" />
      <BlueInput placeholder="blue input" />
      <GreenInput placeholder="green input" />
      <YellowInput placeholder="yellow input" />
    </div>
  );
}

export default App;
