import {
  Home,
  BarChart3,
  LineChart,
  PieChart,
  Settings,
  Bell,
  Users,
  HelpCircle,
  Code,
} from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

// Main navigation items
export const navLinks: NavLink[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Stock Analysis",
    href: "/stock-analysis",
    icon: BarChart3,
  },
  {
    title: "Performance",
    href: "/performance",
    icon: LineChart,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: PieChart,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Dev",
    href: "/dev",
    icon: Code,
  },
];

// Bottom navigation items
export const bottomNavLinks: NavLink[] = [
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
];
