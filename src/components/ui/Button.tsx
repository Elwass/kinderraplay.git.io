import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-primary text-white shadow-[0_12px_24px_rgba(217,137,86,0.3)]"
          : "bg-white text-primary border border-primary",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};

export default Button;
