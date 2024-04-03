import React from 'react';
import './css/calendar.css';
import f32 from "./img/favicon-32x32.png";


function Calendar() {
    let courses = [["Math", "red"], ["Prog", "green"], ["Algo", "yellow"], ["Archi", "orange"]];

    let date = new Date();
    let day = date.getDate();
    let monthInt = date.getMonth();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[monthInt];
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let days = [];

    let firstDayOfMonth = new Date(date.getFullYear(), monthInt, 1);
    let offset = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    for(let i = 1; i<offset; i++){
        days.push(0);
    }
    for(let i = 1; i <32; i++){
        days.push(i);
    }

    return (
        <div className="container3">
            <div className="left-section">
                <div className="title">  
                    <img src={f32} alt="logo"/>
                    <h1>Dorset College<br/>Calendar</h1>
                </div>
                <a href="/schedule-add">New Event</a>
                <div className="course-box">
                    {courses.map((item)=>(
                        <div className="course">
                            <div className="color-box" style={{backgroundColor: item[1]}}></div>
                            <p>{item[0]}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='right-section'>
                <div className='c-topnav'>
                    <h1 className='mois'>{month}</h1>
                    <div className='c-nav'>
                        <a href='./SubmitStu'>Assignments</a>
                        <a href='./assignementPage'>List of Assignments</a>
                        <a href='#'>2</a>
                        <a href='#'>3</a>
                    </div>
                </div>
                <div className="bar"></div>
                <div className="grille">
                    {week.map((item)=>(
                        <p className='jourSemaine'>{item}</p>
                    ))}

                    {days.map((item)=>(
                        item == 0 && <div className='caseJour' style={{
                            visibility: "hidden"}}></div> ||
                        item == day && <div className='caseJour' style={{color: "yellow"}}>{item}</div> ||
                        <div className='caseJour'>{item}</div>
                    ))
                    }
                </div>
            </div>
        </div>

    );
}

export default Calendar;
