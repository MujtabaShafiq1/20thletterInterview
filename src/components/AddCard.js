import { useDispatch } from "react-redux"
import { cardActions } from "../store/CardSlice"
import { Box } from "@mui/material"
import { CardContainer } from "../misc/MUIComponents"
import AddIcon from "../assets/plus.png"

const AddCard = () => {

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(cardActions.addCard())
    }

    return (
        <CardContainer sx={{ backgroundColor: "rgba(236, 236, 236, 1)" }} onClick={clickHandler} >
            <Box component="img" src={AddIcon} sx={{ height: 25, width: "auto" }} />
        </CardContainer>
    )
}

export default AddCard