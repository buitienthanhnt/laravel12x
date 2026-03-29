import { jsx, jsxs } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { Sun, Moon, Monitor } from "lucide-react";
import { u as useAppearance } from "./use-appearance-kAHHmv26.js";
import { c as cn } from "./app-logo-icon-B9Jqkbyf.js";
import { S as SettingsLayout, H as Heading, e as edit } from "./layout-C_Ot8n5z.js";
import { A as AppLayout } from "./app-layout-Nd97fMZL.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "./index-Dpx75qeW.js";
import "./index-C0eUO_6A.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
function AppearanceToggleTab({
  className = "",
  ...props
}) {
  const { appearance, updateAppearance } = useAppearance();
  const tabs = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800",
        className
      ),
      ...props,
      children: tabs.map(({ value, icon: Icon, label }) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => updateAppearance(value),
          className: cn(
            "flex items-center rounded-md px-3.5 py-1.5 transition-colors",
            appearance === value ? "bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100" : "text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"
          ),
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "-ml-1 h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "ml-1.5 text-sm", children: label })
          ]
        },
        value
      ))
    }
  );
}
const breadcrumbs = [
  {
    title: "Appearance settings",
    href: edit().url
  }
];
function Appearance() {
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Appearance settings" }),
    /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Appearance Settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          variant: "small",
          title: "Appearance settings",
          description: "Update your account's appearance settings"
        }
      ),
      /* @__PURE__ */ jsx(AppearanceToggleTab, {})
    ] }) })
  ] });
}
export {
  Appearance as default
};
