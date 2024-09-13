import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { Gauge } from '@mui/x-charts/Gauge';

type CardItem = {
  icon: JSX.Element,
  name: string,
  number: string,
  increase: string,
  percent: number,
}

const CardItem = ({ icon, name, number, increase, percent } : CardItem) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "48%", lg: "25%" },
        padding: "1.2rem",
        bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 0.5
        }}
      >
        {icon}
        <Typography variant='body1' sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          {number}
        </Typography>
        <Typography variant='body2' sx={{ fontSize: "1rem", color: theme.palette.text.secondary }}>
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Gauge 
          width={60} 
          height={60} 
          value={percent}
        />
        <Typography variant='body2' sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardItem