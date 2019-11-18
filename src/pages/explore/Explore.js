import React, { Component } from "react";
import axios from "axios";
import truncate from "lodash.truncate";

//MaterialUI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

//Styling
import "./Explore.scss";

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
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: "80%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },

  div: {
    width: 600,
    height: 300,
    overflow: "scroll",
    border: "2px solid black",
    padding: theme.spacing(2)
  }
};

class Explore extends Component {
  state = {
    books: [],
    anchorEl: null,
    open: false,
    book: {
      title: "",
      author: "",
      description: "",
      average_rating: ""
    }
  };

  componentDidMount() {
    axios
      .get(`/books`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  handleClick = (event, title, author, params) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      book: {
        title,
        author,
        description: params.description,
        average_rating: params.average_rating
      }
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { books, anchorEl } = this.state;
    const { classes } = this.props;

    const open = anchorEl === null ? false : true;
    const id = this.state.open ? "simple-popover" : null;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <GridList cellHeight={250} className={classes.gridList} cols={6}>
            {books.map(({ isbn, title, image_url, authors, ...params }) => (
              <GridListTile key={isbn}>
                <img src={image_url} alt={title} />
                <GridListTileBar
                  title={title}
                  subtitle={<span>by: {authors}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${title}`}
                      variant="contained"
                      aria-describedby={id}
                      onClick={event =>
                        this.handleClick(event, title, authors, params)
                      }
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
                  <div className={classes.div}>
                    <h2>{this.state.book.title}</h2>
                    <div>
                      <h4>by: {this.state.book.author}</h4>
                    </div>
                    <div>
                      <p>{this.state.book.average_rating} avg rating</p>
                    </div>
                    <div>
                      <Typography>
                        {truncate(this.state.book.description, {
                          length: 400,
                          separator: " "
                        })}
                      </Typography>
                    </div>
                  </div>
                </Popover>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Explore);
