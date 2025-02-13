"use client"

import React, { useState } from 'react'

import Typography  from '@mui/material/Typography';
import Container from '@mui/material/Container';

//----------------------ICON----------------------
import ChairIcon from '@mui/icons-material/Chair';
import DoorIcon from '@mui/icons-material/SensorDoor';
import ClockIcon from '@mui/icons-material/QueryBuilderTwoTone';

//---------------Components----------------------
import FlightCard from './FlightCard';

import { FlightData } from '../flightData';

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
        <div className="container">
        <h1>Liste des Vols</h1>
        <table id="flightsTable">
            <thead>
                <tr>
                    <th>Numéro de Vol</th>
                    <th>Départ</th>
                    <th>Arrivée</th>
                    <th>Heure</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               
            </tbody>
        </table>
    </div>
       
        {list}
    </div>
  )
}

export default Plane_list

/*
 <Container sx={{
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
                    */