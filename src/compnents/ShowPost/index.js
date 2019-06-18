import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/postAction";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import "./style.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { CircularProgress } from "@material-ui/core";
import mement from "moment";
function searchingFor(searchText) {
  return function(x) {
    return (
      x.title.toLowerCase().includes(searchText.toLowerCase()) || !searchText
    );
  };
}

class Todoview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      searchText: "",
      loader: true,
      allPosts: []
    };
    // console.log('moment date is: ', moment().format('ll'))

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    // console.log('search called');
    // console.log('search text is : ', event.target.value);
    this.setState({ searchText: event.target.value });
  }

  handleChangeexpand = id => (event, expanded) => {
    if (event.target.classList.contains("some")) {
      return null;
    } else {
      this.setState({
        expanded: expanded ? id : false
      });
    }
  };

  componentDidMount() {
    this.props.getPost();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      loader: false
    });
    if (nextProps.getAllPostStatus === "done") {
      this.setState({
        allPosts: nextProps.allPosts
      });
    }
  }

  render() {
    const { expanded, loader, allPosts } = this.state;

    return (
      <Fragment>
        {/* Desktop Design Image */}

        <div className="root">
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Grid item xs={12} sm={12} md={12}>
                <div className="addHead-bg">
                  <Typography variant="display3" gutterBottom className="title">
                    All Post
                  </Typography>
                </div>
              </Grid>
              {loader ? (
                <div style={{ marginLeft: "50%", marginBottom: "25px" }}>
                  <CircularProgress />
                </div>
              ) : (
                <Grid item xs={12}>
                  {allPosts.length > 0 ? (
                    allPosts
                      .filter(searchingFor(this.state.searchText))
                      .map((item, index) => {
                        return (
                          <ExpansionPanel
                            expanded={expanded === index}
                            onChange={this.handleChangeexpand(index)}
                            className="todoItem"
                            key={index}
                          >
                            <ExpansionPanelSummary className="expansionSummary">
                              <Grid container className="todoPanel">
                                <Grid item md={10} align="left">
                                  <Typography
                                    className="description"
                                    style={{ fontSize: "22px !important" }}
                                  >
                                    {item.title}
                                  </Typography>
                                </Grid>
                                {/* className={classes.manus} */}
                              </Grid>
                            </ExpansionPanelSummary>
                            <Divider />
                            <ExpansionPanelDetails>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography
                                    variant="caption"
                                    className="description"
                                  >
                                    {item.desc}
                                  </Typography>
                                </Grid>
                                <Grid item xs={10} md={11}>
                                  <Typography
                                    variant="caption"
                                    align="right"
                                    className="description"
                                  >
                                    {mement(item.createdAt).format(
                                      "DD/MMM/YYYY"
                                    )}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        );
                      })
                  ) : (
                    <div>
                      <center>
                        <h2 style={{ color: "lightgray" }}>There is no post</h2>
                      </center>
                    </div>
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    getAllPostStatus: state.postReducer.getAllPostStatus,
    allPosts: state.postReducer.allPosts,
    loader: state.postReducer.loader
  };
}

export default connect(
  mapStateToProps,
  { getPost }
)(Todoview);
