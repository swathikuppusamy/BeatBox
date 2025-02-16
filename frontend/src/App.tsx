// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
// import { Button } from "./components/ui/button"
import { Route, Routes } from "react-router-dom"

//import { axiosInstance } from "./lib/axios"
import AuthCallBackPage from "./pages/authcallback/AuthCallBackPage"
import HomePage from "./pages/home/HomePage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import Chatpage from "./pages/chat/Chatpage"
import AlbumPage from "./pages/album/AlbumPage"
import AdminPage from "./pages/admin/AdminPage"
import { Toaster } from "react-hot-toast"
import NotFoundPage from "./pages/404/NotFoundPage"


const App = () => {

    

  return (
    <>
      
    <Routes>
     <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}  />}/>
     <Route path="/auth-callback" element={<AuthCallBackPage/>}/>
     <Route path="/admin" element={<AdminPage/>}/>

      <Route element={<MainLayout/>}>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/chat" element={<Chatpage/>}/>
         <Route path="/albums/:albumId" element={<AlbumPage/>}/>
         <Route path="/*" element={<NotFoundPage/>}/>


      </Route>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
