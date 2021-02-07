import React, { useState } from "react";
import { AppBar, Toolbar, Grid, Box, Typography } from "@material-ui/core";

import { Preview } from "components/Preview";
import { TextInput } from "components/TextInput";
import { Selector } from "components/Selector";

export const MarkupParser = () => {
  const [content, setContent] = useState("");
  const [parseTo, setParseTo] = useState("HTML");

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar style={{ minHeight: "75px" }}>
          <Box display="flex" flexGrow={1}>
            <Typography variant="h6" align="center">Markup Parser</Typography>
          </Box>
          <Selector parseTo={parseTo} setParseTo={setParseTo} />
        </Toolbar>
      </AppBar>
      <br />
      <Grid container
            justify="center"
            alignItems="flex-start"
            style={{ minHeight: "88vh" }}
            spacing={2}
      >
        <Grid item xs={5}>
          <TextInput content={content} setContent={setContent} />
        </Grid>
        <Grid item xs={5}>
          <Preview parseTo={parseTo} content={content} />
        </Grid>
      </Grid>
    </>
  );
}
