// import React, { FC, PropsWithChildren } from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRoutesProps {
//   isLoggedIn: boolean;
// }

// const ProtectedRoutes: FC<ProtectedRoutesProps & PropsWithChildren> = ({
//   isLoggedIn,
//   children,
// }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoutes;
