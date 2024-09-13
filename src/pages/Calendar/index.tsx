'use client'
import React from 'react'
import { CalendarData } from '../../data/data';
import { Calendar as CalendarJSX, momentLocalizer, View, Views } from 'react-big-calendar';
import { useState } from 'react';
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from '@mui/material';
import TitleHeader from '../../components/TitleHeader';
import { useTheme } from '@emotion/react';

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const theme = useTheme();
    const [view, setView] = useState<View>(Views.WORK_WEEK);
  
    const handleOnChangeView = (selectedView: View) => {
      setView(selectedView);
    };
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2
      }}
    >
      {/* Page name */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TitleHeader name="Calendar" text="Full Calendar Interactive Page" />
      </Box>
      <Box sx={{bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d", padding: "1rem"}}>
        <CalendarJSX
            localizer={localizer}
            events={CalendarData}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(2023, 1, 0, 8, 0, 0)}
            max={new Date(2025, 1, 0, 17, 0, 0)}
        />
      </Box>
    </Box>
  )
}

export default React.memo(Calendar);
