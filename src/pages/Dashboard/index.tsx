import { Box, Button, Typography } from "@mui/material"
import { useTheme } from "@emotion/react"
import { BarChart, LineChart, Gauge, ScatterChart } from "@mui/x-charts"
import { IoIosMail } from "react-icons/io"
import { IoMdDownload } from "react-icons/io"
import { FaCalculator } from "react-icons/fa6"
import { FaUserPlus } from "react-icons/fa"
import { MdTraffic } from "react-icons/md"

import TitleHeader from "../../components/TitleHeader"
import CardItem from "../../components/CardItem"
import { TransactionsData } from "../../data/data"

const Dashboard = () => {
  
  const theme = useTheme()
  const sample = [1, 10, 30, 50, 70, 90, 100]
  const dataUs = [10, 20, 50, 40, 60, 40, 80]
  const dataFrance = [15, 15, 35, 52, 68, 75, 90]
  const dataJapan = [31, 50, 30, 50, 60, 80, 100]

  const data = [
    {
      id: 'data-0',
      x1: 329.39,
      x2: 391.29,
      y1: 443.28,
      y2: 153.9,
    },
    {
      id: 'data-1',
      x1: 96.94,
      x2: 139.6,
      y1: 110.5,
      y2: 217.8,
    },
    {
      id: 'data-2',
      x1: 336.35,
      x2: 282.34,
      y1: 175.23,
      y2: 286.32,
    },
    {
      id: 'data-3',
      x1: 159.44,
      x2: 384.85,
      y1: 195.97,
      y2: 325.12,
    },
    {
      id: 'data-4',
      x1: 188.86,
      x2: 182.27,
      y1: 351.77,
      y2: 144.58,
    },
    {
      id: 'data-5',
      x1: 143.86,
      x2: 360.22,
      y1: 43.253,
      y2: 146.51,
    },
    {
      id: 'data-6',
      x1: 202.02,
      x2: 209.5,
      y1: 376.34,
      y2: 309.69,
    },
    {
      id: 'data-7',
      x1: 384.41,
      x2: 258.93,
      y1: 31.514,
      y2: 236.38,
    },
    {
      id: 'data-8',
      x1: 256.76,
      x2: 70.571,
      y1: 231.31,
      y2: 440.72,
    },
    {
      id: 'data-9',
      x1: 143.79,
      x2: 419.02,
      y1: 108.04,
      y2: 20.29,
    },
    {
      id: 'data-10',
      x1: 103.48,
      x2: 15.886,
      y1: 321.77,
      y2: 484.17,
    },
    {
      id: 'data-11',
      x1: 272.39,
      x2: 189.03,
      y1: 120.18,
      y2: 54.962,
    },
    {
      id: 'data-12',
      x1: 23.57,
      x2: 456.4,
      y1: 366.2,
      y2: 418.5,
    },
    {
      id: 'data-13',
      x1: 219.73,
      x2: 235.96,
      y1: 451.45,
      y2: 181.32,
    },
    {
      id: 'data-14',
      x1: 54.99,
      x2: 434.5,
      y1: 294.8,
      y2: 440.9,
    },
    {
      id: 'data-15',
      x1: 134.13,
      x2: 383.8,
      y1: 121.83,
      y2: 273.52,
    },
    {
      id: 'data-16',
      x1: 12.7,
      x2: 270.8,
      y1: 287.7,
      y2: 346.7,
    },
    {
      id: 'data-17',
      x1: 176.51,
      x2: 119.17,
      y1: 134.06,
      y2: 74.528,
    },
    {
      id: 'data-18',
      x1: 65.05,
      x2: 78.93,
      y1: 104.5,
      y2: 150.9,
    },
    {
      id: 'data-19',
      x1: 162.25,
      x2: 63.707,
      y1: 413.07,
      y2: 26.483,
    },
    {
      id: 'data-20',
      x1: 68.88,
      x2: 150.8,
      y1: 74.68,
      y2: 333.2,
    },
    {
      id: 'data-21',
      x1: 95.29,
      x2: 329.1,
      y1: 360.6,
      y2: 422.0,
    },
    {
      id: 'data-22',
      x1: 390.62,
      x2: 10.01,
      y1: 330.72,
      y2: 488.06,
    },
  ];
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
        <TitleHeader name="Dashboard" text="Welcome to your dashboard" />
        <Button
          variant="contained"
          startIcon={<IoMdDownload />}
          sx={{ fontWeight: "bold" }}
        >
          DOWNLOAD REPORTS
        </Button>
      </Box>
      {/* section 01 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: {xs: "wrap", lg: "unset"},
          gap: 2
        }}
      >
        <CardItem 
          icon={<IoIosMail size={28} style={{ color: theme.palette.text.secondary   }} />} 
          name="Email Sent" 
          number="11,361" 
          increase="+14%" 
          percent={75}
        />
        <CardItem 
          icon={<FaCalculator size={28} style={{ color: theme.palette.text.secondary   }} />} 
          name="Sales Obtained" 
          number="431,225" 
          increase="+21%" 
          percent={50}
        />
        <CardItem 
          icon={<FaUserPlus size={28} style={{ color: theme.palette.text.secondary   }} />} 
          name="New Clients" 
          number="32,441" 
          increase="+5%" 
          percent={30}
        />
        <CardItem 
          icon={<MdTraffic size={28} style={{ color: theme.palette.text.secondary   }} />} 
          name="Traffic Received" 
          number="1,325,134" 
          increase="+43%" 
          percent={80}
        />
      </Box>
      {/* section 02 */}
      <Box
        sx={{
          display: "flex",
          flexWrap: {xs: "wrap", lg: "unset"},
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Box
          sx={{ width: {xs: "100%", lg: "70%"}, bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d", padding: "1rem" }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }} >
              Revenue Generated
            </Typography>
          </Box>
          <LineChart
            xAxis={[{ data: sample }]}
            yAxis={[
              { id: 'linearAxis', scaleType: 'linear' },
            ]}
            series={[
              { yAxisId: 'linearAxis', data: dataUs, label: 'US' },
              { yAxisId: 'linearAxis', data: dataFrance, label: 'France' },
              { yAxisId: 'linearAxis', data: dataJapan, label: 'Japan' },
            ]}
            leftAxis="linearAxis"
            rightAxis="linearAxis"
            height={400}
          />
        </Box>
        <Box
          sx={{ width: {xs: "100%", lg: "30%"}, bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d", padding: "1rem" }}
        >

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Recent Transactions
            </Typography>
            <Box 
              sx={{ 
                height: "21rem",
                overflow: "hidden",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                gap: 1 
              }}
            >
              {TransactionsData.map((item, index) => (
                  <Box 
                    key={index}
                    sx={{
                      bgcolor: theme.palette.background.default,
                      padding: "0.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography variant="body2">{item.code}</Typography>
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ width: "35%" }} >{item.date}</Typography>
                    <Box sx={{ width: "25%", textAlign: "right" }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          bgcolor: theme.palette.text.secondary,
                          borderRadius: "0.2rem",
                          padding: "0.3rem 0.4rem",
                          fontSize: "0.8rem",
                          color: "rgba(0, 0, 0, 0.7)",
                          display: "inline",
                        }}>
                          {item.money}
                        </Typography>
                    </Box>
                  </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* section 03 */}
      <Box
        sx={{
          display: "flex",
          flexWrap: {xs: "wrap", lg: "unset"},
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Box
          sx={{
            width: {xs: "100%", md: "50%", lg: "calc(100% / 3)"},
            flex: "1",
            bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d",
            padding: "1rem"
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Campaign
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Gauge 
              width={150} 
              height={150} 
              value={75}
              innerRadius="70%"
            />
            <Typography variant="body2" sx={{ fontSize: "1rem", color: theme.palette.text.secondary }}>
              $48,352 revenue generated
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: {xs: "100%", md: "50%", lg: "calc(100% / 3)"},
            flex: "1",
            bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d",
            padding: "1rem"
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Sales Quantity
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
              series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
              width={400}
              height={230}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: {xs: "100%", md: "50%", lg: "calc(100% / 3)"},
            flex: "1",
            bgcolor: theme.palette.mode === "light" ? "#fff" : "#141b2d",
            padding: "1rem"
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Geography Based Traffic
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ScatterChart
              width={400}
              height={220}
              series={[
                {
                  label: 'Series A',
                  data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                },
                {
                  label: 'Series B',
                  data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard