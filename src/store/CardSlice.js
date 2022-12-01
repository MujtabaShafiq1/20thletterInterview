import { colors } from "../utils/colors"
import { createSlice } from "@reduxjs/toolkit"

const max = 5;

const initialState = {
    cards: [{
        id: Math.random(),
        title: "Title",
        subTitle: "subtitle",
        primaryColor: colors[Math.floor(Math.random() * max)].primaryColor,
        backgroundColor: colors[Math.floor(Math.random() * max)].backgroundColor,
    }]
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        card(state, action) {
            state.primaryColor = action.payload.primaryColor
            state.backgroundColor = action.payload.backgroundColor
        },
        addCard(state, action) {
            state.cards.push({
                id: Math.random(),
                title: "Title",
                subTitle: "subtitle",
                primaryColor: colors[Math.floor(Math.random() * max)].primaryColor,
                backgroundColor: colors[Math.floor(Math.random() * max)].backgroundColor,
            })
        },
        updateCard(state, action) {
            const foundIndex = state.cards.findIndex(card => card.id === action.payload);
            state.cards[foundIndex].primaryColor = colors[Math.floor(Math.random() * max)].primaryColor
            state.cards[foundIndex].backgroundColor = colors[Math.floor(Math.random() * max)].backgroundColor
        }
    }
})

export const cardActions = cardSlice.actions;
export default cardSlice;