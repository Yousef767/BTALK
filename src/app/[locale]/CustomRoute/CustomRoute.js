// CustomRoute.js
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getIsAuthenticated } from '../auth/page';

const CustomRoute = ({ children }) => {
  const isAuthenticated = getIsAuthenticated();
  const router = useRouter();
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push(`/adminLogin`);
    }
  }, [isAuthenticated]);


  return children;
};

export default CustomRoute;
