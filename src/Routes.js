import React from "react";
import Tasks from "pages/Tasks";
import Addnotes from "pages/Addnotes";
import Products1 from "pages/Products1";
import Account from "pages/Account";
import Contacts from "pages/Contacts";
import AddTask from "pages/AddTask";
import Products from "pages/Products";
import AddMeeting from "pages/AddMeeting";
import Dashboard from "pages/Dashboard";
import AddAccount from "pages/AddAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/addmeeting" element={<AddMeeting />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products1" element={<Products1 />} />
        <Route path="/addnotes" element={<Addnotes />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
