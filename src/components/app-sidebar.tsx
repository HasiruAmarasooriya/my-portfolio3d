"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  DollarSign,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Hasiru Amarasooriya",
    email: "hasiru@kumudu.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Kumudu Hospital",
      logo: GalleryVerticalEnd,
      plan: "Matale",
    },
  ],
  navMain: [
    {
      title: "Main Pages",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Home Page",
          url: "/home",
        },
        {
          title: "About Us",
          url: "/about",
        },
        {
          title: "Services",
          url: "/services",
        },
        {
          title: "Contact Us",
          url: "#",
        },
        {
          title: "BLOG",
          url: "#",
        },
      ],
    },
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
      ],
    },
    {
      title: "Cashier",
      url: "#",
      icon: DollarSign,
      isActive: true,
      items: [
        {
          title: "Cashier",
          url: "#",
        },
        {
          title: "Other Income/Expenses",
          url: "#",
        },
        {
          title: "Cashier Sessions",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
        {
          title: "Claim Bill",
          url: "#",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Channeling",
          url: "#",
        },
        {
          title: "OPD",
          url: "#",
        },
        {
          title: "X-Ray",
          url: "#",
        },
        {
          title: "Admission",
          url: "#",
        },
      ],
    },
    {
      title: "Master Data",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Channeling",
          url: "#",
        },
        {
          title: "OPD",
          url: "#",
        },
        {
          title: "X-Ray",
          url: "#",
        },
        {
          title: "Admission",
          url: "#",
        },
      ],
    },
    
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
