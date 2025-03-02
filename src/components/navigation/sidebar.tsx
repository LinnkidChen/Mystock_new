"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 h-full w-60 p-4 border-r">
      <div className="text-xl font-bold mb-6">My Stock App</div>
      <nav className="space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              {/* @ts-expect-error - Icon component props */}
              <Icon size={20} />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
