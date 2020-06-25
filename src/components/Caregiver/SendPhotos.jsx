import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./MyRelatives.scss";
import telLogo from "../../img/tel.png";
import BtnBack from "../Elements/BtnBack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SendPhotos() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Family" {...a11yProps(0)} />
          <Tab label="Friends" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="pic">
          <img src="https://via.placeholder.com/350" alt=""></img>
        </div>
        <div className="contact-container">
          <div className="contact-name">
            <h2>Maria Carré</h2>
            <h4>My daughter</h4>
          </div>
          <div className="logo-div">
            <img src={telLogo} alt="tel"></img>
          </div>
        </div>
        <div className="presentation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tristique mollis faucibus. Pellentesque a cursus felis, et volutpat
            ipsum. Duis non vehicula arcu. Pellentesque aliquet quam a odio
            lobortis dictum. Praesent condimentum a lacus quis tempor.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="pic">
          <img src="https://via.placeholder.com/350" alt=""></img>
        </div>
        <div className="contact-container">
          <div className="contact-name">
            <h2>Pat Labruti</h2>
            <h4>My neighbour</h4>
          </div>
          <div className="logo-div">
            <img src={telLogo} alt="tel"></img>
          </div>
        </div>
        <div className="presentation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tristique mollis faucibus. Pellentesque a cursus felis, et volutpat
            ipsum. Duis non vehicula arcu. Pellentesque aliquet quam a odio
            lobortis dictum. Praesent condimentum a lacus quis tempor.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="pic">
          <img src="https://via.placeholder.com/350" alt=""></img>
        </div>
        <div className="contact-container">
          <div className="contact-name">
            <h2>Isabelle</h2>
            <h4>Nurse</h4>
          </div>
          <div className="logo-div">
            <img src={telLogo} alt="tel"></img>
          </div>
        </div>
        <div className="presentation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tristique mollis faucibus. Pellentesque a cursus felis, et volutpat
            ipsum. Duis non vehicula arcu. Pellentesque aliquet quam a odio
            lobortis dictum. Praesent condimentum a lacus quis tempor.
          </p>
        </div>
      </TabPanel>
    </div>
    <div>
    <BtnBack/>
    </div>

    </div>
  );
}

export default SendPhotos;
