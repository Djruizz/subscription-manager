import type { NavigationMenuItem } from "@nuxt/ui";
// composables/useNavigation.ts
export const useNavigation = () => {
  const items: NavigationMenuItem = {
    dashboard: {
      label: "Dashboard",
      to: "/dashboard",
      icon: "i-lucide-layout-dashboard",
    },
    subscriptions: {
      label: "Subscriptions",
      to: "/dashboard/subscriptions",
      icon: "i-lucide-dollar-sign",
    },
    analytics: {
      label: "Analytics",
      to: "/dashboard/analytics",
      icon: "i-lucide-chart-line",
    },
    calendar: {
      label: "Calendar",
      to: "/dashboard/calendar",
      icon: "i-lucide-calendar",
    },
    settings: {
      label: "Settings",
      to: "/dashboard/settings",
      icon: "i-lucide-settings",
    },
  };

  const desktopMenu = [
    items.dashboard,
    items.subscriptions,
    items.analytics,
    items.calendar,
  ];

  const settingsButton = items.settings;

  const mobileMenu = [
    items.subscriptions,
    items.analytics,
    items.dashboard,
    items.calendar,
    items.settings, 
  ];

  return {
    desktopMenu,
    mobileMenu,
    settingsButton,
  };
};
