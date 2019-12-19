import React, { Component } from "react";
import { Link } from "react-router-dom";
import truncate from "lodash.truncate";
import { connect } from "react-redux";

//MaterialUI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

//Styling
import "./Explore.scss";

// Redux Actions
import { getBooks } from "../../redux/books/action";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiPaper: {
      // Name of the rule
      elevation8: {
        // Some CSS
        // boxShadow: "none"
      }
    }
  }
});

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden"
  },
  gridList: {
    width: "90%"
  },
  icon: {
    color: "rgba(255, 255, 255, 255)"
  },
  div: {
    width: 600,
    height: 260,
    overflow: "scroll",
    border: "2px solid black",
    padding: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
    width: 700
  }
};

class Explore extends Component {
  state = {
    anchorEl: null,
    open: false,
    book: {}
  };

  componentDidMount() {
    this.props.getBooks();
  }

  handleClick = (event, book) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      book: book
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { books } = this.props;
    const { classes } = this.props;

    const open = anchorEl === null ? false : true;
    const id = this.state.open ? "simple-popover" : null;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TextField
            label="Search"
            id="margin-dense"
            className={classes.textField}
            margin="dense"
          />
          <GridList cellHeight={250} className={classes.gridList} cols={6}>
            {books.map(book => (
              <GridListTile key={book.isbn}>
                <img src={book.image_url} alt={book.title} />
                <GridListTileBar
                  title={book.title}
                  subtitle={<span>by: {book.authors}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${book.title}`}
                      variant="contained"
                      aria-describedby={id}
                      onClick={event => this.handleClick(event, book)}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                >
                  <Typography component="div" className={classes.div}>
                    <Typography variant="h5">
                      <Link
                        to={{
                          pathname: `/book-details/${book.isbn}`,
                          state: { book: this.state.book }
                        }}
                      >
                        {this.state.book.title}
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1">
                      by: {this.state.book.author}
                    </Typography>
                    <Typography variant="subtitle2">
                      {this.state.book.average_rating} avg rating
                    </Typography>
                    <Typography variant="body1" align="justify">
                      {truncate(this.state.book.description, {
                        length: 400,
                        separator: " "
                      })}
                    </Typography>
                  </Typography>
                </Popover>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Explore));
