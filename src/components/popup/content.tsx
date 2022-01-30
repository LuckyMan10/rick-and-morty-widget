import { FC } from "react";

import { CardContent, Typography, CardMedia, Card } from "@mui/material";
import { useStyles } from "./mui-styles";
import { character } from "type";

const Content: FC<character> = ({
  origin,
  image,
  name,
  species,
  status,
  type,
  gender,
  location
}) => {
  const classes = useStyles();
  return (
    <Card data-testid="card" className={classes.root}>
      <CardMedia data-testid="card-media" className={classes.media} image={image} />
      <CardContent data-testid="card-content">
        <Typography data-testid="card-typography" gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography data-testid="card-typography" gutterBottom color="textSecondary">
          <br />
          Gender: {gender}
          <br />
          Species: {species}
          <br />
          Status: {status}
          <br />
          Origin: {origin && origin.name ? origin.name : "?"}
          <br />
          Location: {location && location.name ? location.name : "?"}
          <br />
          Type: {type ? type : "?"}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export { Content };
