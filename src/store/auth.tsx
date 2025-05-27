import { createContext, useContext, useState, type ReactElement } from "react";
import { createUserWithEmailAndPassword, type User } from "firebase/auth";
import { auth } from "../firebase";

interface userCredentialsInterface {
  email: string;
  password: string;
}
interface AuthProviderProps {
  children: ReactElement;
}

interface AuthContextInterface {
  user: User | null;
  register: (credentials: userCredentialsInterface) => Promise<void>;
}

const AuthContext = createContext<AuthContextInterface>({
  user: null,
  register: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function register({ email, password }: userCredentialsInterface) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode, errorMessage});
      });
  }

  const ctxValue = {
    user,
    register
  };
  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
