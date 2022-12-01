import { Box, styled } from "@mui/material"

const Flexbox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const CardContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    height: "25vh",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px",
})


export { Flexbox, CardContainer }