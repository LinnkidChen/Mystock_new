import { Home, BarChart2, Settings } from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

export const navLinks: NavLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart2,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
