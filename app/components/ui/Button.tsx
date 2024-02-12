import { ButtonHTMLAttributes, forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button className={className} ref={ref} {...props}>
      {props.children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
