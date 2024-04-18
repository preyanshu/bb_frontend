import { useEffect, useRef, useState } from "react";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  SeeMore,
  PortalWrapper
} from "./Calender.styled";
import { DAYS, MOCKAPPS } from "./conts";
import {
  datesAreOnSameDay,
  getDarkColor,
  getDaysInMonth,
  getMonthYear,
  getSortedDays,
  nextMonth,
  prevMonth,
  range,
  sortDays
} from "./utils";
import { useTheme } from './context/ThemeContext';

export const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [events, setEvents] = useState(MOCKAPPS);
  const dragDateRef = useRef();
  const dragindexRef = useRef();
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});
  const {setevents,setdate,setCurrent,Event}=useTheme();

  const addEvent = (date, event) => {
    if (!event.target.classList.contains("StyledEvent")) {
      // const text = window.prompt("name");
      // if (text) {
      //   date.setHours(0);
      //   date.setSeconds(0);
      //   date.setMilliseconds(0);
      //   // console.log("events",events);
      //   setEvents((prev) => [
      //     ...prev,
      //     { date, title: text, color: getDarkColor() }
      //   ]);
      // }
    }
  };

  useEffect(()=>{
    setEvents(localStorage.getItem("events")?JSON.parse(localStorage.getItem("events")):[]);

  },[])
  useEffect(()=>{
    setevents(events);


  },[events])





  useEffect(()=>{
    setCurrent(currentDate);
  
  },[currentDate])

  const drag = (index, e) => {
    dragindexRef.current = { index, target: e.target };
  };

  const onDragEnter = (date, e) => {
    e.preventDefault();
    dragDateRef.current = { date, target: e.target.id };
  };

  const drop = (ev) => {
    ev.preventDefault();

    setEvents((prev) =>
      prev.map((ev, index) => {
        if (index === dragindexRef.current.index) {
          ev.date = dragDateRef.current.date;
        }
        return ev;
      })
    );
  };

  const handleOnClickEvent = (event) => {
    setShowPortal(true);
    setPortalData(event);
    console.log(event);
  };

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  };

  return (
    <Wrapper>
      <DateControls>
        <ion-icon
          onClick={() => prevMonth(currentDate, setCurrentDate)}
          name="arrow-back-circle-outline"
        ></ion-icon>
        {getMonthYear(currentDate)}
        <ion-icon
          onClick={() => nextMonth(currentDate, setCurrentDate)}
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </DateControls>
      <SevenColGrid className="daysgrid">
        {DAYS.map((day) => (
          <HeadDays className="nonDRAG day">{day}</HeadDays>
        ))}
      </SevenColGrid>

      <SevenColGrid
        fullheight={true}
        is28Days={getDaysInMonth(currentDate) === 28}
        className="datesgrid"

      >

        {getSortedDays(currentDate).map((day) => (
          <div
          className="date"
          
            id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day} `}
            onDragEnter={(e) =>
              onDragEnter(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                ),
                e
              )
            }
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={drop}
            onClick={(e) =>{
              addEvent(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                ),
                e
              );


              setdate(e.target.id);
            

            }
             
            }
            style={{position:"relative"}}
          >
            <span
              className={`nonDRAG ${
                datesAreOnSameDay(
                  new Date(),
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
                  ? "active"
                  : ""
              }`}
              style={{position:"absolute",bottom:"0px",right:"0px"}}
            >
              {day}
            </span>
            <EventWrapper className="eventwrapper">
              {Event.map(
                (ev, index) =>
                  datesAreOnSameDay(
                    new Date(ev.date),
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day
                    )
                  ) && (
                    <div
                      onDragStart={(e) => drag(index, e)}
                      onClick={() => handleOnClickEvent(ev)}
                      draggable
                      className="StyledEvent event"
                      id={`${ev.color} ${ev.title}`}
                      key={ev.title}
                      style={{
                        height:"10px",
                        width:"10px",
                        borderRadius:"100%",
                        backgroundColor:ev.color,
                        position:"absolute",
                        top:"8px",
                        left:"8px"
                      }}

                    >
                      
                    </div>
                  )
              )}
            </EventWrapper>
          </div>
        ))}
      </SevenColGrid>
      {showPortal && (
        <Portal
          {...portalData}
          handleDelete={handleDelete}
          handlePotalClose={handlePotalClose}
        />
      )}
    </Wrapper>
  );
};

const EventWrapper = ({ children }) => {
  if (children.filter((child) => child).length)
    return (
      <>
        {children}
        
      </>
    );
};

const Portal = ({ title, date, handleDelete, handlePotalClose }) => {
  return (
    <PortalWrapper style={{zIndex:+1000000000000000,width:"31vw",height:"fit-content",backgroundColor:"#22222E",minWidth:"270px"}}>
      <h5  className="mb-4" style={{color:"white"}}>Are you Sure you want to delete the event? </h5>
      {/* <p style={{color:"black"}}>{new Date(date).toDateString()}</p> */}
      <ion-icon onClick={handleDelete}  style={{height:"20px",width:"20px"}} name="trash-outline"></ion-icon>
      <ion-icon onClick={handlePotalClose} style={{height:"20px",width:"20px"}} name="close-outline"></ion-icon>
    </PortalWrapper>
  );
};
