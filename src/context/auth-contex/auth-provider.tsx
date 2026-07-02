
// Helper to get icon name based on type

import { useState, type ReactNode } from "react";
import { AuthContext } from "./auth-context";
import type { User } from "../../constants";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleSetUser = (data: User | null) => setUser(data);

  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;