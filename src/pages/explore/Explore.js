import React, { Component } from "react";
import axios from "axios";

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
        boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.9)"
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
  typography: {
    padding: theme.spacing(2)
  }
};

class Explore extends Component {
  state = {
    books: [],
    anchorEl: null,
    open: false
  };

  componentDidMount() {
    axios
      .get(`/books`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  handleClick = event => {
    this.setState({ ...this.state, anchorEl: event.currentTarget });
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
          <GridList cellHeight={250} className={classes.gridList} cols={3}>
            {books.map(({ isbn, title, image_url, authors }) => (
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
                      onClick={event => this.handleClick(event)}
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
                  <Typography className={classes.typography}>
                    Title: Lorem ipsum dolor <br />
                    Decription: sit amet, consectetur adipiscing elit.
                    Suspendisse feugiat nisi sed odio convallis, vitae facilisis
                    neque tempus. Nam ac nunc accumsan, consectetur sem eget,
                    molestie neque. Suspendisse velit leo, congue eget metus in,
                    lacinia aliquam tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
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

export default withStyles(styles)(Explore);
