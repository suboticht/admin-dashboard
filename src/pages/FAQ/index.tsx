import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material'
import TitleHeader from '../../components/TitleHeader'
import { MdExpandLess } from "react-icons/md"
import { FaqData } from '../../data/data'
import { useTheme } from '@emotion/react'

const FAQ = () => {
  const theme = useTheme()
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
        <TitleHeader name="FAQ" text="Frequently Asked Questions Page" />
      </Box>
      {FaqData.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary
            expandIcon={<MdExpandLess />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ color: theme.palette.text.secondary }}
          >
            {faq.name}
          </AccordionSummary>
          <AccordionDetails>
            {faq.body}
          </AccordionDetails>
        </Accordion>
      ))}
      
    </Box>
  )
}

export default FAQ