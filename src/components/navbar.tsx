"use client";

import React, { useState } from "react";
import {
  Home,
  BarChart3,
  LineChart,
  PieChart,
  Settings,
  Bell,
  Users,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define the type for navigation items
interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

// Navigation items
const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "#",
  },
  {
    title: "Stock Analysis",
    icon: BarChart3,
    href: "/stock-analysis",
  },
  {
    title: "Performance",
    icon: LineChart,
    href: "/performance",
  },
  {
    title: "Portfolio",
    icon: PieChart,
    href: "/portfolio",
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
  },
];

const bottomNavItems = [
  {
    title: "Notifications",
    icon: Bell,
    href: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "#",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "#",
  },
];

interface VerticalNavbarProps {
  className?: string;
}

const VerticalNavbar = ({ className }: VerticalNavbarProps) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  // Toggle navbar collapsed state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Function to render individual nav items
  const renderNavItem = (item: NavItem) => (
    <TooltipProvider key={item.title} delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={activeItem === item.title ? "secondary" : "ghost"}
            size={collapsed ? "icon" : "default"}
            className={cn(
              "w-full justify-start mb-1 text-white",
              activeItem === item.title
                ? "bg-gray-800 text-emerald-400"
                : "hover:bg-gray-800 hover:text-emerald-400"
            )}
            onClick={() => setActiveItem(item.title)}
          >
            <item.icon className={cn("h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
            {!collapsed && <span>{item.title}</span>}
          </Button>
        </TooltipTrigger>
        {collapsed && (
          <TooltipContent side="right">{item.title}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-gray-900 border-r border-gray-800 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Navbar Header/Logo Section */}
      <div className="p-4 flex items-center justify-center">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <BarChart3 className="text-emerald-400 h-6 w-6" />
            <span className="text-xl font-bold text-white">
              <span className="text-emerald-400">My</span> Stock
            </span>
          </div>
        )}
        {collapsed && <BarChart3 className="text-emerald-400 h-6 w-6" />}
      </div>

      <Separator className="bg-gray-800" />

      {/* Toggle button */}
      <div className="px-3 py-2">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleCollapse}
          className="w-full text-gray-400 border-gray-800 hover:bg-gray-800 hover:text-emerald-400"
        >
          {collapsed ? ">>" : "<<"}
        </Button>
      </div>

      {/* Main Navigation Items */}
      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">{navItems.map(renderNavItem)}</div>
      </ScrollArea>

      {/* Bottom Navigation Items */}
      <div className="p-3 mt-auto">
        <Separator className="bg-gray-800 mb-2" />
        {bottomNavItems.map(renderNavItem)}
      </div>
    </div>
  );
};

export default VerticalNavbar;
