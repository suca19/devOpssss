import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./assets/HomePage";
import Login from "./assets/Login";
import ChangePassword from "./assets/ChangePassword";
import DevPage from "./assets/DevPage";
import ScheduleAdd from "./assets/ScheduleAdd";
import SubmitStu from "./assets/SubmitStu";

import Calendar from "./assets/Calendar";
import Grades from "./assets/Grades";
import {setGlobalState,useGlobalState} from "./state";
import AssignmentsPage from "./assets/AssignmentPage";

function App() {


    const routes = [
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <Login /> },
        { path: "/change-password", element: <ChangePassword /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/schedule-add", element: <ScheduleAdd /> },
        { path: "/SubmitStu", element: <SubmitStu /> },
        { path: "/devpage", element: <DevPage />},
        { path: "/assignementPage", element: <AssignmentsPage />},
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}

export default App;
