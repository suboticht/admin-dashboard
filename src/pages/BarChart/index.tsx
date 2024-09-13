import { Box } from '@mui/material'
import { BarChart as BarChartJSX } from "@mui/x-charts"
import TitleHeader from '../../components/TitleHeader'
import { useTheme } from '@emotion/react'

const BarChart = () => {
  const theme = useTheme();
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
        <TitleHeader name="Bar Chart" text="Simple Bar Chart" />
      </Box>
      <Box sx={{bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d", padding: "1rem", width: "100%", height: "400px"}}>
        <BarChartJSX
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        />
      </Box>
    </Box>
  )
}

export default BarChart