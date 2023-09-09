import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Products", href: "#", icon: UsersIcon, current: false },
  { name: "Category", href: "#", icon: UsersIcon, current: false },
  { name: "Orders", href: "#", icon: FolderIcon, current: false },
  { name: "Coupon", href: "#", icon: CalendarIcon, current: false },
  { name: "Our Staff", href: "#", icon: DocumentDuplicateIcon, current: false },
];

export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
