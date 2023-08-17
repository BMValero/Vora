import React, {
  ReactNode,
  useContext,
  useEffect,
  createContext,
  useMemo,
  useState,
} from "react";

const Hydrated = createContext(false);

export function useHydration() {
  return useContext(Hydrated);
}

export default function HydrationProvider({ children }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const value = useMemo(() => isHydrated, [isHydrated]);

  return <Hydrated.Provider value={value}>{children}</Hydrated.Provider>;
}
