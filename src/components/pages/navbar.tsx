import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { NavItem } from "../ui/nav-item";

const navItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Capacitaciones",
    href: "/capacitations",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-end px-4 md:px-0 h-16">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          {navItems.map((navItem, key) => (
            <NavItem key={key} {...navItem} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
