import React from "react";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";

//Styling
import "./BookDetails.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "5%"
  },
  image: {
    width: 128,
    height: 228
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    paddingTop: "40%"
  }
}));

const BooksPreview = props => {
  const classes = useStyles();
  let {
    title,
    image_url,
    description,
    author,
    average_rating
  } = props.location.state.book;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} src={image_url} alt={props.title} />
          </ButtonBase>
          <Grid>
            <div className="ratingTitle">Rate this book</div>
            <div className="rating">
              <input type="radio" name="star" id="star1" />
              <label htmlFor="star1"></label>

              <input type="radio" name="star" id="star2" />
              <label htmlFor="star2"></label>

              <input type="radio" name="star" id="star3" />
              <label htmlFor="star3"></label>

              <input type="radio" name="star" id="star4" />
              <label htmlFor="star4"></label>

              <input type="radio" name="star" id="star5" />
              <label htmlFor="star5"></label>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h1>{title}</h1>
          <p>by {author}</p>
          <p>{average_rating} avg rating</p>
          <p>{description}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BooksPreview;
