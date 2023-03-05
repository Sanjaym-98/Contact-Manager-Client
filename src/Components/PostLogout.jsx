import { Navigate, Outlet } from "react-router-dom";

const PostLogout = () => {
    const getUserDetails = JSON.parse(localStorage.getItem("token"))
    return (getUserDetails ? <Outlet /> : <Navigate to="/"/>)
}
export default PostLogout;