import React from "react";

import SideNav from "../ui/dashboard/sidenav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;

/** why should we use the layout.
 * Partial Rendering: on navigation, next.js only update the page component and layout will not re-render. 
 * 
 */

/** Root Layout
 * root layout is required for every next.js app.
 * any UI in root layout will be shared across all page in our application.
 * we can use the root layout to modify <html> and <body> tags, and add metadata.
 * 
 */
