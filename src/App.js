import { useSelector } from "react-redux"
import { Grid, Container, Typography } from "@mui/material";

import Card from "./components/Card";
import AddCard from "./components/AddCard";

function App() {

  const cardList = useSelector(state => state.card.cards)

  return (
    <Container maxWidth='lg' align='center'>
      <Typography sx={{ textAlign: "left", fontSize: "18px" }}>Muhammad Mujtaba Shafiq</Typography>
      <Grid container justifyContent="center" spacing={2} >
        {cardList.map(card => {
          return (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card properties={card} key={card.primaryColor} />
            </Grid>
          )
        })}
        <Grid item>
          <AddCard />
        </Grid>
      </Grid>

    </Container>

  );
}

export default App;
