import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookOpen, Users, UserPlus, Settings, Info } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'דף הבית', icon: BookOpen },
    { path: '/classes', label: 'מידע על השיעורים', icon: Users },
    { path: '/register', label: 'רישום לשיעורים', icon: UserPlus },
    { path: '/about', label: 'אודות הארגון', icon: Info },
    { path: '/admin', label: 'ניהול', icon: Settings },
  ];

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0], mobile?: boolean }) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;
    
    return (
      <Link
        to={item.path}
        onClick={() => mobile && setIsOpen(false)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
        } ${mobile ? 'w-full justify-start' : ''}`}
      >
        <Icon size={18} />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ארגון T</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {navItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">ארגון T</span>
                </div>
                {navItems.map((item) => (
                  <NavLink key={item.path} item={item} mobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;