interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "blur";
  duration?: number;
}

// Render content immediately so search engines and the mobile critical path do
// not wait for a general-purpose animation runtime.
export function AnimateIn({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
