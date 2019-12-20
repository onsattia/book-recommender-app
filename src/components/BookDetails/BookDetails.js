import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Styling
import "./BookDetails.scss";

//Redux actions
import { addBook } from "../../redux/books/action";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "5%"
  },
  button: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center"
  },
  img: {
    margin: "auto",
    display: "block",
    // maxWidth: "100%",
    // maxHeight: "100%",
    width: "180px",
    height: "300px"
  }
}));

const BooksPreview = props => {
  const classes = useStyles();
  let {
    title,
    image_url,
    description,
    authors,
    average_rating
  } = props.location.state.book;

  const book = props.location.state.book;
  console.log(props.currentUser);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item>
            <img className={classes.img} src={image_url} alt={props.title} />
            <Grid className={classes.button}>
              <Button
                variant="outlined"
                onClick={() =>
                  props.currentUser === null
                    ? props.history.push("/sign")
                    : props.addBook(book) &&
                      window.alert("Book added to your books")
                }
              >
                Add to MyBooks
              </Button>
            </Grid>
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
            <Typography variant="h3">{title}</Typography>
            <Typography variant="subtitle1">by {authors}</Typography>
            <Typography variant="subtitle1">
              {average_rating} avg rating
            </Typography>
            <Typography variant="body1" align="justify">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BooksPreview)
);
