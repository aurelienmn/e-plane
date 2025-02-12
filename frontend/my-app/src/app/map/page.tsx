"use client"
import React from 'react'
import { Card , CardContent  } from '@mui/material'
import ProgressBar from '../../../components/ProgressBar'

function page() {
  return (
    <>
      <Card>
        <CardContent>
          <ProgressBar/>
        </CardContent>
      </Card>
    </>
  )
}

export default page
