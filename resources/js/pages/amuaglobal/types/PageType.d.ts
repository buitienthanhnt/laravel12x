import { type Auth } from "@/types";

export type PageShareType = {
  name: string;
  auth: Auth;
  sidebarOpen: boolean;
  [key: string]: unknown;
};