import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SetUser {
  token: string | null;
  setToken: (token: string) => void;
}

const useToken = create<SetUser>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        setToken: (token: string) => set({ token }),
      }),

      {
        name: "token-storage",
      }
    )
  )
);

export default useToken;
