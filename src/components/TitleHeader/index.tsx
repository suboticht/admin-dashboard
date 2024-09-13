import { Box, Typography, useTheme } from '@mui/material'

type titleHeader = {
    name: string,
    text: string
}

const TitleHeader = ({ name, text } : titleHeader) => {
    const theme = useTheme();
  return (
    <Box sx={{ marginBottom: "2rem" }}>
        <Typography
            variant='h3'
            sx={{ 
                fontSize: "1.8rem", 
                lineHeight: "1.5",
                textTransform: "uppercase",
                fontWeight: "bold" 
            }}
        >
            {name}
        </Typography>
        <Typography
            variant='body2'
            sx={{ 
                fontSize: "1rem",
                lineHeight: "1.4",
                color: theme.palette.text.secondary 
            }}
        >
            {text}
        </Typography>
    </Box>
  )
}

export default TitleHeader