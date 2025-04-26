import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#0EA5E9" />
              <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#38BDF8" />
            </svg>
          </div>
          <span className="ml-2 text-lg font-medium">鱼皮的编程宝典</span>
        </Link>
      </div>
      
      <div className="relative mx-4 flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索..."
            className="w-full py-1 px-3 pr-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
        </div>
      </div>
      
      <nav className="flex items-center space-x-4">
        <NavLink href="/learning-path">学习路线</NavLink>
        <NavLink href="/courses">自学之路</NavLink>
        <NavLink href="/programming-sharing">编程分享</NavLink>
        <NavLink href="/high-quality-courses">高质量试题</NavLink>
        <NavLink href="/projects">项目实战</NavLink>
        <NavLink href="/programming-guide" isHighlighted>编程导航</NavLink>
        <NavLink href="/tech-knowledge">技术知识</NavLink>
        <NavLink href="/bug-handbook">Bug手册</NavLink>
        <NavLink href="/practical-tools">实用工具</NavLink>
        <NavLink href="/about">作者</NavLink>
        <NavLink href="https://github.com">GitHub</NavLink>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isHighlighted?: boolean;
}

const NavLink = ({ href, children, isHighlighted = false }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={`text-sm hover:text-blue-500 transition-colors ${
        isHighlighted ? "text-orange-500 font-medium flex items-center" : "text-gray-700"
      }`}
    >
      {isHighlighted && (
        <span className="mr-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </span>
      )}
      {children}
    </Link>
  );
};

export default Header;