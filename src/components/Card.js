import { useDispatch } from "react-redux"
import { cardActions } from "../store/CardSlice"
import { Flexbox, CardContainer } from "../misc/MUIComponents"
import { Box, Typography, Button } from "@mui/material"

const Card = ({ properties }) => {

    const dispatch = useDispatch()

    const colorChangeHandler = (e) => {
        dispatch(cardActions.updateCard(properties.id));
    }

    return (
        <CardContainer sx={{ flexDirection: "column", background: properties.backgroundColor, }}>

            <Flexbox sx={{ justifyContent: "space-around", width: "100%" }}>

                <Typography sx={{ fontSize: "22px", color: properties.primaryColor }}>{properties.title}</Typography>
                <Button onClick={colorChangeHandler} sx={{
                    fontSize: "10px",
                    background: properties.primaryColor,
                    color: "white",
                    "&:hover": {
                        opacity: 0.5,
                        background: properties.primaryColor,
                    }
                }}
                >
                    Change Color
                </Button>

            </Flexbox>

            <Box sx={{ minHeight: "15vh" }} />

            <Typography sx={{ fontSize: "16px" }}>{properties.subTitle}</Typography>

        </CardContainer>
    )
}

export default Card