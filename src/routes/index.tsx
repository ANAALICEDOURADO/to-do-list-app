import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
    const isAuthenticated = true;
  
    return (
      isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
  };