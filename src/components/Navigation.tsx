
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, Calculator, Settings, Info } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Sun },
    { path: '/results', label: 'Results', icon: Calculator },
    { path: '/input', label: 'Settings', icon: Settings },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-yellow-600 transition-colors">
            <Sun className="h-8 w-8 text-yellow-500" />
            SolarCalc
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button 
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center gap-2 ${
                      isActive 
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" 
                        : "hover:bg-yellow-50 text-gray-700"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    size="sm"
                    className={isActive ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : ""}
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
