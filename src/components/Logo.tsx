
import { Code2 } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Code2 className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">Plan-A</span>
        <span className="text-sm text-blue-400 -mt-1">Solutions</span>
      </div>
    </div>
  );
};
