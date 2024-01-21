import React from 'react'
// import React,{useState,useEffect} from 'react'
import { Line,Scatter,Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {useNavigate,useLocation} from "react-router-dom"
import useSWR from "swr";

const Graph = (props) => {
  const location=useLocation();
  const desiredHeight = location.pathname === '/user2' ? '260px' : '220px';
  const desiredWidth = location.pathname === '/user2' ? '95%' : '22vw';
 
    const UseData=[
        {X3:"2",
        time:"4"

        },
        {X3:"5",
        time:"6"

        },
        {X3:"7",
        time:"8"

        },
        {X3:"9",
        time:"10"

        },
    ]


    var chartData={
        labels: UseData.map((data) => data.time),
        datasets: [
          {
            label:"",
            data: UseData.map((data) => data.X3),
            backgroundColor: [
              "white",
             
            ],
            borderColor: "white",
            borderWidth: 4,
            borderDash: [3, 3],
          },
        ],
      
    
    }
    var chartData2={
        labels: UseData.map((data) => data.time),
        datasets: [
          {
            label:"",
            data: UseData.map((data) => data.X3),
            backgroundColor: [
              "#DF3636","#FABA8F","#74E760","#B4CDE9"
             
            ],
            // borderColor: "white",
            borderWidth: 2,
            // borderDash: [3, 3],
          },
        ],
      
    
    }
  return (<>

    {location.pathname=="/user2/studentprogress" &&    <div style={{backgroundColor:props.backgroundColor,padding:20+"px",color:"white",height: 400+"px" ,width: desiredWidth,marginTop:-25+"px",borderRadius:10+"px",marginLeft:0.9+"vw",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"2px 2px 3px"+props.backgroundColor}}>
        { props.type==="bar"&&    <Bar
      data={chartData2}
      options={{
        responsive:true,
        scales: {
            
          
          }
      }}
    />}
        { props.type==="line"&&    <Line
      data={chartData2}
      options={{
        responsive:true,
      
      }}
    />}
        { props.type==="pie"&&    <Pie
      data={chartData2}
      options={{
        responsive:true,
        scales: {
            x: {
          
              
            },
            y: {
         
            
            },
          },
      }}
    />}
  
      
    </div>}
    {console.log(desiredHeight)};
    { location.pathname ==="/user2" && !(location.pathname==="/user2/studentprogress")&& <div style={{backgroundColor:props.backgroundColor,padding:20+"px",color:"white",height: desiredHeight ,width: desiredWidth,marginTop:-25+"px",borderRadius:10+"px",marginLeft:0.9+"vw",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"2px 2px 3px"+props.backgroundColor}}>
        { props.type==="bar"&&    <Bar
      data={chartData}
      options={{
        responsive:true,
        scales: {
            x: {
              // Configure the x-axis (horizontal axis)
              display: true, // Display the x-axis
              ticks: {
                color: "white", // Set the color of the x-axis labels to white
              },
              grid: {
                color: "white", // Set the color of the y-axis grid lines to white
              },
            },
            y: {
              // Configure the y-axis (vertical axis)
              display: true, // Display the y-axis
              ticks: {
                color: "white", // Set the color of the y-axis labels to white
              },
              grid: {
                color: "white",
                 // Set the color of the x-axis grid lines to white
               borderDash: [3, 3],  // Set the color of the y-axis grid lines to white
              },
              borderDash: [3, 3],
            },
          },
      }}
    />}
        { props.type==="line"&&    <Line
      data={chartData}
      options={{
        responsive:true,
        scales: {
            x: {
              // Configure the x-axis (horizontal axis)
              display: true, // Display the x-axis
              ticks: {
                color: "white", // Set the color of the x-axis labels to white
              },
              grid: {
                color: "white", // Set the color of the y-axis grid lines to white
              },
            },
            y: {
              // Configure the y-axis (vertical axis)
              display: true, // Display the y-axis
              ticks: {
                color: "white", // Set the color of the y-axis labels to white
              },
              grid: {
                color: "white",
                 // Set the color of the x-axis grid lines to white
               borderDash: [3, 3],  // Set the color of the y-axis grid lines to white
              },
              borderDash: [3, 3],
            },
          },
      }}
    />}
        { props.type==="pie"&&    <Pie
      data={chartData2}
      options={{
        responsive:true,
        scales: {
            x: {
          
              
            },
            y: {
         
            
            },
          },
      }}
    />}
  
      
    </div>}
    { !(location.pathname ==="/user2") && !(location.pathname==="/user2/studentprogress") && <div style={{backgroundColor:props.backgroundColor,padding:20+"px",color:"white",height: 200+"px" ,width: desiredWidth,marginTop:-25+"px",borderRadius:10+"px",marginLeft:0.9+"vw",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"2px 2px 3px"+props.backgroundColor}}>
        { props.type==="bar"&&    <Bar
      data={chartData}
      options={{
        responsive:true,
        scales: {
            x: {
              // Configure the x-axis (horizontal axis)
              display: true, // Display the x-axis
              ticks: {
                color: "white", // Set the color of the x-axis labels to white
              },
              grid: {
                color: "white", // Set the color of the y-axis grid lines to white
              },
            },
            y: {
              // Configure the y-axis (vertical axis)
              display: true, // Display the y-axis
              ticks: {
                color: "white", // Set the color of the y-axis labels to white
              },
              grid: {
                color: "white",
                 // Set the color of the x-axis grid lines to white
               borderDash: [3, 3],  // Set the color of the y-axis grid lines to white
              },
              borderDash: [3, 3],
            },
          },
      }}
    />}
        { props.type==="line"&&    <Line
      data={chartData}
      options={{
        responsive:true,
        scales: {
            x: {
              // Configure the x-axis (horizontal axis)
              display: true, // Display the x-axis
              ticks: {
                color: "white", // Set the color of the x-axis labels to white
              },
              grid: {
                color: "white", // Set the color of the y-axis grid lines to white
              },
            },
            y: {
              // Configure the y-axis (vertical axis)
              display: true, // Display the y-axis
              ticks: {
                color: "white", // Set the color of the y-axis labels to white
              },
              grid: {
                color: "white",
                 // Set the color of the x-axis grid lines to white
               borderDash: [3, 3],  // Set the color of the y-axis grid lines to white
              },
              borderDash: [3, 3],
            },
          },
      }}
    />}
        { props.type==="pie"&&    <Pie
      data={chartData2}
      options={{
        responsive:true,
        scales: {
            x: {
          
              
            },
            y: {
         
            
            },
          },
      }}
    />}
  
      
    </div>}
    
       

      
    
    </> )
}

export default Graph
