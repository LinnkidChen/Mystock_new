import React from "react";
import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black shadow-lg py-3">
      <div className="max-w- mx-auto">
        <div className="flex justify-center items-center">
          <Card className="bg-black border-gray-800">
            <div className="flex items-center space-x-3 px-6 py-3">
              <div className="p-2 bg-gray-900 rounded-full">
                <BarChart3 className="text-emerald-400 h-6 w-6" />
              </div>

              <h1 className="text-3xl font-bold text-white tracking-tight">
                <span className="text-emerald-400">My</span> Stock
              </h1>

              <Separator orientation="vertical" className="h-8 bg-gray-700" />

              <Badge
                variant="outline"
                className="text-emerald-400 border-emerald-800"
              >
                Dashboard
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Header;
