import { NavItem } from "./nav-item";
import { NavigationMenu, NavigationMenuList } from "./navigation-menu";

interface Props {
  navItems: {
    label: string;
    href: string;
  }[];
}

export const DesktopNav = ({ navItems }: Props) => {
  console.log("Hola desde el servidor");
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList className="space-x-8">
        {navItems.map((navItem, key) => (
          <NavItem key={key} {...navItem} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
