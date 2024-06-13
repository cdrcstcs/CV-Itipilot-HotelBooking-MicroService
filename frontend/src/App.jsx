import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import {Layout} from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import ProfilePage from "./routes/profilePage/profilePage";
import { useEffect } from "react";
import { setCookie } from "./cookie";
import { cookie } from "../../backend/cookie.js";
function App() {
  useEffect(()=>{
    setCookie('userData', cookie);
    if (cookie != null) {
      console.log(cookie);
    }
  }, [cookie]);
  return (
    <BrowserRouter>
      <Routes>
      {cookie !== null ? (
          <Route path="/" element={<Layout />}>
            <Route path="list" element={<ListPage />} />
            <Route path=":id" element={<SinglePage />} />
            <Route path="add" element={<NewPostPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        ):null}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
