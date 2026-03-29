import { useSyncExternalStore, useMemo, useCallback } from "react";
const listeners = /* @__PURE__ */ new Set();
let currentAppearance = "system";
const prefersDark = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};
const isDarkMode = (appearance) => {
  return appearance === "dark" || appearance === "system" && prefersDark();
};
const applyTheme = (appearance) => {
  if (typeof document === "undefined") return;
  const isDark = isDarkMode(appearance);
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};
const subscribe = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};
const notify = () => listeners.forEach((listener) => listener());
function useAppearance() {
  const appearance = useSyncExternalStore(
    subscribe,
    () => currentAppearance,
    () => "system"
  );
  const resolvedAppearance = useMemo(
    () => isDarkMode(appearance) ? "dark" : "light",
    [appearance]
  );
  const updateAppearance = useCallback((mode) => {
    currentAppearance = mode;
    localStorage.setItem("appearance", mode);
    setCookie("appearance", mode);
    applyTheme(mode);
    notify();
  }, []);
  return { appearance, resolvedAppearance, updateAppearance };
}
export {
  useAppearance as u
};
