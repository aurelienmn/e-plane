"use client"

import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography  from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

//----------------------ICON----------------------
import ChairIcon from '@mui/icons-material/Chair';
import DoorIcon from '@mui/icons-material/SensorDoor';
import ClockIcon from '@mui/icons-material/QueryBuilderTwoTone';

//---------------Components----------------------
import FlightCard from './FlightCard';

function Plane_list({}) {

    const [PlanesInfo,setPlaneInfo] = useState(["Japonais","France"])
    const [PlanesHours,setPlaneHours] = useState(["1h40","2h00"])

    const list = PlanesInfo.map((plane , index) => {
        return(
        <div key={index} className='m-2'>
            <FlightCard/>
        </div>
        )
    })
// siege /  flynumber / gates / terminal / status / horaire 
//----------------------FRONT---------------------------
  return (
    <div>
        <Container sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)", 
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}>
                        <Container sx={{display:"flex", justifyContent: "center"}}>
                        <ClockIcon/>
                            Hours
                        </Container>

                        <Container sx={{display:"flex", justifyContent: "center"}}>
                            <p>Fly number</p>   
                        </Container>

                        <Container sx={{display:'flex' , flexFlow: "column" , alignItems:"center"}}>
                            <ChairIcon/>
                            <Typography >Siege</Typography>
                        </Container>
                        <Container sx={{display:'flex' , justifyContent:'center', alignItems:"center"}}>
                            <DoorIcon/>
                            <Typography>Gate</Typography>
                        </Container>


                        <Container sx={{display:"flex" , justifyContent:'center', alignItems:'center'}}>
                            <p>Status</p>
                        </Container>
                    </Container>
        {list}
    </div>
  )
}

export default Plane_list