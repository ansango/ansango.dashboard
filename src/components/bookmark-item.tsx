import { Raindrop } from "@/lib/raindrop";

import { FC } from "react";
import { Cover, Container, Grid, Body } from "./list-item";

export const BookmarkItem: FC<{ bookmark: Raindrop }> = ({
  bookmark: { title, cover, domain },
}) => {
  return (
    <Container>
      <Grid>
        <Cover src={cover} alt={title} />
        <Body title={title} description={<>{domain}</>} />
      </Grid>
    </Container>
  );
};
