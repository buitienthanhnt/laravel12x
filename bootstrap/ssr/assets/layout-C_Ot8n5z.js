import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { c as cn, B as Button, t as toUrl } from "./app-logo-icon-B9Jqkbyf.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { u as useCurrentUrl, e as edit$2 } from "./app-layout-Nd97fMZL.js";
import { q as queryParams } from "./index-Dpx75qeW.js";
import { a as show } from "./index-C0eUO_6A.js";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Heading({
  title,
  description,
  variant = "default"
}) {
  return /* @__PURE__ */ jsxs("header", { className: variant === "small" ? "" : "mb-8 space-y-0.5", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight",
        children: title
      }
    ),
    description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description })
  ] });
}
const edit$1 = (options) => ({
  url: edit$1.url(options),
  method: "get"
});
edit$1.definition = {
  methods: ["get", "head"],
  url: "/settings/appearance"
};
edit$1.url = (options) => {
  return edit$1.definition.url + queryParams(options);
};
edit$1.get = (options) => ({
  url: edit$1.url(options),
  method: "get"
});
edit$1.head = (options) => ({
  url: edit$1.url(options),
  method: "head"
});
const editForm$1 = (options) => ({
  action: edit$1.url(options),
  method: "get"
});
editForm$1.get = (options) => ({
  action: edit$1.url(options),
  method: "get"
});
editForm$1.head = (options) => ({
  action: edit$1.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit$1.form = editForm$1;
({
  edit: Object.assign(edit$1, edit$1)
});
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/password"
};
edit.url = (options) => {
  return edit.definition.url + queryParams(options);
};
edit.get = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.head = (options) => ({
  url: edit.url(options),
  method: "head"
});
const editForm = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.get = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.head = (options) => ({
  action: edit.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (options) => ({
  url: update.url(options),
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/settings/password"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.put = (options) => ({
  url: update.url(options),
  method: "put"
});
const updateForm = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (options) => ({
  action: update.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...options?.query ?? options?.mergeQuery ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
({
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update)
});
const sidebarNavItems = [
  {
    title: "Profile",
    href: edit$2(),
    icon: null
  },
  {
    title: "Password",
    href: edit(),
    icon: null
  },
  {
    title: "Two-Factor Auth",
    href: show(),
    icon: null
  },
  {
    title: "Appearance",
    href: edit$1(),
    icon: null
  }
];
function SettingsLayout({ children }) {
  const { isCurrentUrl } = useCurrentUrl();
  if (typeof window === "undefined") {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "px-4 py-6", children: [
    /* @__PURE__ */ jsx(
      Heading,
      {
        title: "Settings",
        description: "Manage your profile and account settings"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:space-x-12", children: [
      /* @__PURE__ */ jsx("aside", { className: "w-full max-w-xl lg:w-48", children: /* @__PURE__ */ jsx(
        "nav",
        {
          className: "flex flex-col space-y-1 space-x-0",
          "aria-label": "Settings",
          children: sidebarNavItems.map((item, index) => /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              asChild: true,
              className: cn("w-full justify-start", {
                "bg-muted": isCurrentUrl(item.href)
              }),
              children: /* @__PURE__ */ jsxs(Link, { href: item.href, children: [
                item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
                item.title
              ] })
            },
            `${toUrl(item.href)}-${index}`
          ))
        }
      ) }),
      /* @__PURE__ */ jsx(Separator, { className: "my-6 lg:hidden" }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 md:max-w-2xl", children: /* @__PURE__ */ jsx("section", { className: "max-w-xl space-y-12", children }) })
    ] })
  ] });
}
export {
  Heading as H,
  SettingsLayout as S,
  edit as a,
  edit$1 as e
};
