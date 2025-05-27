import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  Activity,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

export const generalLinks = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "History", icon: History },
  { label: "Calendar", icon: Calendar },
  { label: "Appointments", icon: Clock },
  { label: "Statistics", icon: Activity },
];

export const toolsLinks = [
  { label: "Chat", icon: MessageCircle },
  { label: "Support", icon: HelpCircle },
];

export const settingsLink = { label: "Setting", icon: Settings };
