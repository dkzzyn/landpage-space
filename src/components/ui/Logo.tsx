interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-24" }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="Space Technology" 
      className={`${className} object-contain`} 
    />
  );
}
