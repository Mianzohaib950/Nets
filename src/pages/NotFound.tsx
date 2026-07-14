import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-xs font-medium tracking-widest uppercase text-clay mb-4">404</p>
      <h1 className="font-serif text-5xl font-light text-forest-900 mb-6 tracking-tight">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you're looking for doesn't exist. Let us help you find your way.
      </p>
      <Link
        to="/"
        className="relative group bg-primary text-primary-foreground px-8 py-3 rounded-[2px] text-sm font-medium"
      >
        <span className="relative">
          Back to Home
          <span className="absolute left-0 bottom-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
        </span>
      </Link>
    </div>
  );
}
