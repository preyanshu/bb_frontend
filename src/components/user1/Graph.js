import React from 'react'
// import React,{useState,useEffect} from 'react'
import { Scatter, Pie ,Doughnut} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {useNavigate,useLocation} from "react-router-dom"
import useSWR from "swr";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip ,BarChart,Bar} from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page A', uv: 200, pv: 2000, amt: 2400},
{name: 'Page A', uv: 300, pv: 2600, amt: 2400},
{name: 'Page A', uv: 150, pv: 1600, amt: 2400},




];

const Graph = (props) => {
  const location=useLocation();
  const desiredHeight = location.pathname === '/user2' ? '260px' : '220px';
  const desiredWidth = location.pathname === '/user2' ? '95%' : '95%';
 
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
            // borderDash: [3, 3],
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
            borderWidth: 0,
            // borderDash: [3, 3],
          },
        ],
      
    
    }
  return (<>

    {false &&    <div style={{backgroundColor:props.backgroundColor,padding:20+"px",color:"white",height: 400+"px" ,width: desiredWidth,marginTop:-25+"px",borderRadius:10+"px",marginLeft:0.9+"vw",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"2px 2px 3px"+props.backgroundColor}}>
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
   data={{
    labels: ['X', 'Y'], // Your two labels
    datasets: [{
        data: [60, 40],
        // backgroundColor: [props.graphColor, 'grey'], // Specify colors for the two labels
        // borderColor: 'transparent', // Set border color to transparent
    }]
}}
  options={{
    responsive: true,
    plugins: {
      legend: {
          labels: {
              color: "white", // Set label color to white
          }
      }
  },
    scales: {
      x: {},
      y: {}
    }
  }}
/>
}
          {props.type === "doughnut" && 
    <Doughnut
        data={{
            labels: ['X', 'Y'], // Your two labels
            datasets: [{
                data: [60, 40],
                backgroundColor: [props.graphColor, 'grey'], // Specify colors for the two labels
                // borderColor: 'transparent', // Set border color to transparent
            }]
        }}
        options={{
            responsive: true,
            scales: {
                x: {
                    display: false, // Hide the x-axis
                },
                y: {
                    display: false, // Hide the y-axis
                },
            },
            plugins: {
                legend: {
                    labels: {
                        color: props.textcolor, // Set label color to white
                    }
                }
            }
        }}
    />
}
  
      
    </div>}
    {console.log(desiredHeight)}

    { 1 && <div style={{backgroundColor:"",padding:20+"px",color:"white",height: 200+"px" ,width: desiredWidth,borderRadius:10+"px",marginLeft:0.9+"vw",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"15px"}}>
        { props.type==="bar"&&  <BarChart width={600} height={220} data={props.barData} style={{ marginLeft: "-20px" }}>
        <Bar dataKey="uv" fill="#545454" barSize={25} />
  <Bar dataKey="pv" fill="#914EC2" barSize={25} />
 
  {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
  <XAxis dataKey="name" tick={{ fill: props.textcolor }} />
  <YAxis tick={{ fill: props.textcolor }} />
</BarChart>

}
        { props.type==="line"&&    <LineChart width={600} height={220} data={props.lineData} style={{ marginLeft: "-20px" }}>
  <Line type="monotone" dataKey="uv" stroke="#6CE5E8" strokeWidth={3} />
  {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
  <XAxis dataKey="name" tick={{ fill: props.textcolor }} />
  <YAxis tick={{ fill: props.textcolor }} />
</LineChart>
}
        { props.type==="pie"&&    <Pie
      data={chartData2}
      options={{
        responsive:true,
        scales: {
          x: {
            ticks: {
              color: props.textcolor // Set x-axis label color to white
            }
          },
          y: {
            ticks: {
              color: props.textcolor // Set y-axis label color to white
            }
          }
        }
    ,
          plugins: {
            legend: {
                labels: {
                    color: props.textcolor, // Set label color to white
                }
            }
        }


      }}
    />}
      {props.type === "doughnut" && 
   <div style={{ width: '160px', height: '160px' }}>
   <Doughnut
       data={{
           labels: props.doughnutLabel, // Your two labels
           datasets: [{
               data: props.doughnutData,
               backgroundColor: [props.graphColor, 'grey'], // Specify colors for the two labels
               borderColor: 'transparent', // Set border color to transparent
           }]
       }}
       options={{
           // responsive: true,
           cutout: 40, 
           scales: {
               x: {
                   display: false, // Hide the x-axis
               },
               y: {
                   display: false, // Hide the y-axis
               },
           },
           plugins: {
               legend: {
                   labels: {
                       color: props.textcolor, // Set label color to white
                   }
               }
           }
       }}
   />
</div>

}




  
      
    </div>}
    
       

      
    
    </> )
}

export default Graph
