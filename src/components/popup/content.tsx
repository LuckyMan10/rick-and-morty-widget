import { FC } from "react";

import { CardContent, Typography, CardMedia, Card } from "@mui/material";
import { useStyles } from "./mui-styles";
import { character } from "type";

const Content: FC<character> = ({ image, name, species, status, type, gender }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          <br />
          Gender: {gender}
          <br />
          Species: {species}
          <br />
          Status: {status}
          <br />
          Type: {type ? type : "?"}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export { Content };
