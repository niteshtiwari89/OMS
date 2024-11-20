// import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
// import axios from 'axios';
// import { message } from 'antd';
// import {jwtDecode} from 'jwt-decode';

// // Define types for User and AuthContext
// interface User {
//     email: string;
//     role: string;
//     // Add other user properties if needed
// }

// interface AuthContextType {
//     user: User | null;
//     isAuthenticated: boolean;
//     login: (email: string, password: string) => Promise<void>;
//     signup: (name: string, email: string, password: string) => Promise<void>;
//     logout: () => void;
// }

// // Create context with default values
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 const decodedToken: any = jwtDecode(token); // Decode the JWT token
//                 setUser({ email: decodedToken.email, role: decodedToken.role });
//                 setIsAuthenticated(true);
//             } catch (error) {
//                 console.error('Error decoding token', error);
//                 logout(); // If the token is invalid, log the user out
//             }
//         }
//     }, []);

//     // const login = async (email: string, password: string) => {
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/users/login', {
//     //             email,
//     //             password,
//     //         });

//     //         if (response.data) {
//     //             message.success({
//     //                 content: 'Login successful!',
//     //                 style: {
//     //                     position: 'fixed',
//     //                     top: 0,
//     //                     right: '10px'
//     //                 }
//     //             });
//     //             // Proceed with your login logic (e.g., redirecting, setting state)
//     //         } else {
//     //             message.error('Login failed. Please try again.');
//     //         }
//     //         const { token } = response.data;
//     //         localStorage.setItem('token', token); // Store the token in localStorage
//     //         const decodedToken: any = jwt_decode(token); // Decode the token to get user info

//     //         setUser({ email: decodedToken.email, role: decodedToken.role }); // Set user data from decoded token
//     //         setIsAuthenticated(true); // Store the token
//     //     } catch (error) {
//     //         console.error(error);
//     //         // Handle error (e.g., set error state)
//     //     }
//     // };

//     const login = async (email: string, password: string) => {
//         try {
//             const response = await axios.post('http://localhost:5000/users/login', {
//                 email,
//                 password,
//             });

//             if (response.data && response.data.token) {
//                 message.success({
//                     content: 'Login successful!',
//                     style: {
//                         position: 'fixed',
//                         top: 0,
//                         right: '10px'
//                     }
//                 });

//                 const { token } = response.data;
//                 localStorage.setItem('token', token); // Store the token in localStorage
//                 const decodedToken: any = jwtDecode(token); // Decode the token to get user info

//                 setUser({ email: decodedToken.email, role: decodedToken.role }); // Set user data from decoded token
//                 setIsAuthenticated(true);
//             } else {
//                 message.error({
//                     content: 'Login Failed!',
//                     style: {
//                         position: 'fixed',
//                         top: 0,
//                         right: '10px'
//                     }
//                 });
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             message.error({
//                 content: 'Login Failed!',
//                 style: {
//                     position: 'fixed',
//                     top: 0,
//                     right: '10px'
//                 }
//             });
//         }
//     };

//     // const signup = async (name: string, email: string, password: string) => {
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/users/signup', {
//     //             name,
//     //             email,
//     //             password,
//     //         });

//     //         console.log(name, email, password);
//     //         if (response.status !== 201) throw new Error('Signup failed');

//     //         await login(email, password); // Automatically log in after signup
//     //     } catch (error) {
//     //         console.error(error);
//     //         // Handle error (e.g., set error state)
//     //     }
//     // };

//     const signup = async (name: string, email: string, password: string) => {
//         try {
//             const response = await axios.post('http://localhost:5000/users/signup', {
//                 name,
//                 email,
//                 password,
//             });

//             if (response.status === 201) {
//                 message.success({
//                     content: 'Signup successful!',
//                     style: {
//                         position: 'fixed',
//                         top: 0,
//                         right: '10px',
//                     },
//                 });

//                 await login(email, password); // Automatically log in after signup
//             } else {
//                 throw new Error('Signup failed');
//             }
//         } catch (error) {
//             console.error('Signup error:', error);
//             message.error({
//                 content: 'Signup failed. Please try again later.',
//                 style: {
//                     position: 'fixed',
//                     top: 0,
//                     right: '10px',
//                 },
//             });
//         }
//     };

//     const logout = () => {
//         // setUser(null);
//         setUser(null);
//         setIsAuthenticated(false);
//         localStorage.removeItem('token');
//         message.success({
//             content: 'Logout successful!',
//             style: {
//                 position: 'fixed',
//                 top: 0,
//                 right: '10px'
//             }
//         });
//         setIsAuthenticated(false);
//         localStorage.removeItem('token');
//     };

//     return (
//         <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = (): AuthContextType => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };



import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { message } from 'antd';
import  {jwtDecode} from 'jwt-decode';// Correct import for jwt-decode

// Define types for User and AuthContext
interface User {
    email: string;
    role: string;
    // Add other user properties if needed
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    usersId:string,
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    updateRole: (newRole: string) => Promise<void>;
}

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [usersId ,setUsersId] = useState<string>("");

    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken: any = jwtDecode(token); // Decode the JWT token
                setUser({ email: decodedToken.email, role: decodedToken.role });
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error decoding token', error);
                logout(); // If the token is invalid, log the user out
            }
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:5000/users/login', {
                email,
                password,
            });

            if (response.data && response.data.token) {
                message.success({
                    content: 'Login successful!',
                    style: {
                        position: 'fixed',
                        top: 0,
                        right: '10px',
                    },
                });
                
                const { token } = response.data;

                setUsersId(response.data.userId);
                console.log(response.data.userId);
                console.log(usersId)
                localStorage.setItem('token', token); // Store the token in localStorage
                const decodedToken: any = jwtDecode(token); // Decode the token to get user info
                
                setUser({ email: decodedToken.email, role: decodedToken.role }); // Set user data from decoded token
                setIsAuthenticated(true);
            } else {
                message.error({
                    content: 'Login failed. Please check your credentials and try again.',
                    style: {
                        position: 'fixed',
                        top: 0,
                        right: '10px',
                    },
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            message.error({
                content: 'Login Failed! Please try again later.',
                style: {
                    position: 'fixed',
                    top: 0,
                    right: '10px',
                },
            });
        }
    };

    const signup = async (name: string, email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:5000/users/signup', {
                name,
                email,
                password,
            });

            if (response.status === 201) {
                message.success({
                    content: 'Signup successful!',
                    style: {
                        position: 'fixed',
                        top: 0,
                        right: '10px',
                    },
                });

                // Automatically log in after signup
                await login(email, password);
            } else {
                throw new Error('Signup failed');
            }
        } catch (error) {
            console.error('Signup error:', error);
            message.error({
                content: 'Signup failed. Please try again later.',
                style: {
                    position: 'fixed',
                    top: 0,
                    right: '10px',
                },
            });
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
        message.success({
            content: 'Logout successful!',
            style: {
                position: 'fixed',
                top: 0,
                right: '10px',
            },
        });
    };

    const updateRole = async (newRole: string) => {
        if (!user || user.role === newRole) return; // No change if role is already the same

        try {
            const response = await axios.put('http://localhost:5000/users/updateRole', {
                userId: user.email, // Assuming you are passing the user email or userId
                newRole,
            });

            if (response.status === 200) {
                // Update local user role after success
                setUser((prevUser) => prevUser ? { ...prevUser, role: newRole } : prevUser);
                message.success({
                    content: 'Role updated successfully!',
                    style: {
                        position: 'fixed',
                        top: 0,
                        right: '10px',
                    },
                });
            }
        } catch (error) {
            console.error('Role update error:', error);
            message.error({
                content: 'Failed to update role!',
                style: {
                    position: 'fixed',
                    top: 0,
                    right: '10px',
                },
            });
        }
    };
    return (
        <AuthContext.Provider value={{ user,updateRole, isAdmin ,isAuthenticated, login,usersId, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
