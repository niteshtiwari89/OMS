// // import React, { useState } from 'react'
// // import "./App.css";
// // import AuthPage from './AuthPage';
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import Login from './LogSign/Login';
// // import Register from './LogSign/Register';
// // import { useAuth } from './AuthProvider/AuthContext';
// // import ProtectedRoute from './ProtectedRoute';



// // const App: React.FC = () => {
// //     const { isAuthenticated , user } = useAuth();

// //     console.log(user)
// // console.log(isAuthenticated);


// //     return (
// //         <>
// //             <Routes>
// //                 {/* <Route
// //                         path="/sign_up"
// //                         element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
// //                     />
// //                     <Route
// //                         path="/login"
// //                         element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
// //                     />
// //                     <Route
// //                         path="/*"
// //                         element={isAuthenticated ? <AuthPage /> : <Navigate to="/login" />}
// //                     /> */}
// //                 <Route path="/login" element={<Login />} />
// //                 <Route path="/sign_up" element={<Register />} />

// //                 {/* Role-based Protected Routes */}
// //                 <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
// //                     <Route path="/admin" element={<AuthPage />} />
// //                 </Route>

// //                 <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
// //                     <Route path="/user" element={<AuthPage />} />
// //                 </Route>

// //                 {/* Fallback to login if not authenticated */}
// //                 <Route path="/*" element={isAuthenticated ? <Navigate to="/user" /> : <Navigate to="/login" />} />

// //             </Routes>

// //         </>
// //     )
// // }

// // export default App


// import React from 'react';
// import './App.css';
// import AuthPage from './AuthPage';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './LogSign/Login';
// import Register from './LogSign/Register';
// import { useAuth } from './AuthProvider/AuthContext';
// import ProtectedRoute from './ProtectedRoute';

// const App: React.FC = () => {
//     const { isAuthenticated, user } = useAuth();

//     console.log(user);
//     console.log(isAuthenticated);

//     return (
//         <>
//             <Routes>
//                 {/* Login and Register routes */}
//                 <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/user" />} />
//                 <Route path="/sign_up" element={!isAuthenticated ? <Register /> : <Navigate to="/user" />} />

//                 {/* Protected Routes */}
//                 <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
//                     <Route path="/admin" element={<AuthPage />} />
//                 </Route>

//                 <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
//                     <Route path="/user" element={<AuthPage />} />
//                 </Route>

//                 {/* Redirect to '/user' if authenticated, else redirect to login */}
//                 <Route path="/*" element={isAuthenticated ? <Navigate to="/user" /> : <Navigate to="/login" />} />
//             </Routes>
//         </>
//     );
// }

// export default App;


    import React from 'react';
    import './App.css';
    import AuthPage from './AuthPage';
    import { Routes, Route, Navigate } from 'react-router-dom';
    import Login from './LogSign/Login';
    import Register from './LogSign/Register';
    import { useAuth } from './AuthProvider/AuthContext';
    import ProtectedRoute from './ProtectedRoute';
    import AdminPanel from './pages/AdminPanel/AdminPanel';


    interface NavRedirect{
        nav?:string
    }
    const App: React.FC<NavRedirect> = () => {
        const { isAuthenticated, user } = useAuth();

        const redirectTo = isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/user') : '/login';

        return (
            <Routes>
                {/* Login and Register routes */}
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to={redirectTo} />} />
                <Route path="/sign_up" element={!isAuthenticated ? <Register /> : <Navigate to={redirectTo} />} />

                {/* Protected Routes */}
                <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']} element={<AdminPanel nav={redirectTo} />} />} />
                <Route path="/user/*" element={<ProtectedRoute allowedRoles={['user', 'admin']} element={<AuthPage nav={redirectTo} />} />} />


                {/* <Route path="/user/*" element={<MainContent />} /> */}
                {/* <Route path="/admin/*" element={<MainContent />} /> */}
                {/* Redirect to the correct page if authenticated */}
                <Route path="/*" element={isAuthenticated ? <Navigate to={redirectTo} /> : <Navigate to="/login" />} />
            </Routes>
        );
    }

    export default App;
