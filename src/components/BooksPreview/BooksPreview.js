import React from "react";

//MaterialUI
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

//Styling
import "./BooksPreview.scss";

const BooksPreview = ({ title, image_url, authors, icon }) => (
  <GridListTile>
    <img src={image_url} alt={title} />
    <GridListTileBar
      title={title}
      subtitle={<span>by: {authors}</span>}
      actionIcon={
        <IconButton aria-label={`info about ${title}`} className={icon}>
          <InfoIcon />
        </IconButton>
      }
    />
  </GridListTile>
);

export default BooksPreview;
