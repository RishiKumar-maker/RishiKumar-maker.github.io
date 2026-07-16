import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className, size = 20 }: LucideIconProps) {
  // Safely look up the component by name
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Default fallback icon
    return <Icons.HelpCircle className={className} size={size} id={`icon-fallback-${name}`} />;
  }

  return <IconComponent className={className} size={size} id={`icon-${name}`} />;
}
