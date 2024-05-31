"use client";
// Example authentication logic
function isAuthenticated() {
  // Check if user is authenticated (e.g., check if session token exists)
  // Return true if authenticated, false otherwise
  return false; // Placeholder logic, replace with actual implementation
}

// PrivateRoute.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, []);

  if (!isAuthenticated()) {
    return null; // Render nothing if not authenticated (preventing flickering)
  }

  return <>{children}</>;
};

export default PrivateRoute;
