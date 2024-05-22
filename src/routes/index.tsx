import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
    const isAuthenticated = true; // Replace with your authentication logic
  
    return (
      isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
  };