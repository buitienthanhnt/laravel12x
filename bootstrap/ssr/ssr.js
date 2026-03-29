import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(
      `./pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-Dwag03Nr.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-CFUs3M5M.js"), "./pages/auth/login.tsx": () => import("./assets/login-CsvcPrxs.js"), "./pages/auth/register.tsx": () => import("./assets/register-DtkJy4Gm.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-DAUg9smp.js"), "./pages/auth/two-factor-challenge.tsx": () => import("./assets/two-factor-challenge-BzJZkUC6.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-BW1ucCAw.js"), "./pages/dashboard.tsx": () => import("./assets/dashboard-CYAeUGGL.js"), "./pages/settings/appearance.tsx": () => import("./assets/appearance-DDcD91AX.js"), "./pages/settings/password.tsx": () => import("./assets/password-dkD08pfe.js"), "./pages/settings/profile.tsx": () => import("./assets/profile-4bhOkHkW.js"), "./pages/settings/two-factor.tsx": () => import("./assets/two-factor-Cu9rP-cf.js"), "./pages/welcome.tsx": () => import("./assets/welcome-BrSFYdJ3.js") })
    ),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
