import { FC } from "react";
import { Container, Cover, Grid, Body } from "./list-item";

type Props = {
  title: string;
  description?: string;
  cover: string;
};

export const ListItem: FC<Props> = ({ title, description, cover }) => {
  return (
    <Container>
      <Grid>
        <Cover src={cover} alt={title} />
        <Body title={title} description={description} />
      </Grid>
    </Container>
  );
};
