import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button variants following Tégris design system
 * - Primary: Cyan accent with glow effect
 * - Secondary: Subtle dark surface
 * - Ghost: Transparent with hover effect
 * - Outline: Thin border style (Resend-inspired)
 * - Hero: Main CTA with enhanced glow
 * - Glass: Glassmorphism effect
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Cyan glow button
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_80px_-12px_hsl(180_100%_50%_/_0.6)]",
        // Destructive state
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline - Ultra thin border (Resend style)
        outline:
          "border border-border bg-transparent hover:bg-secondary hover:border-primary/30 text-foreground",
        // Secondary - Subtle dark
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Ghost - Minimal
        ghost: "hover:bg-secondary hover:text-foreground",
        // Link style
        link: "text-primary underline-offset-4 hover:underline",
        // Hero variant - For main CTAs
        hero: "bg-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_100px_-12px_hsl(180_100%_50%_/_0.7)] hover:scale-[1.02] active:scale-[0.98]",
        // Glass variant - Glassmorphism effect
        glass: "bg-card/60 backdrop-blur-sm text-foreground hover:bg-card/80 border border-border",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
