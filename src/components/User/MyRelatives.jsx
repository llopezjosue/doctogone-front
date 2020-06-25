import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './MyRelatives.scss';
import RelativeCard from './RelativeCard';
import datas from '../data/datas.json';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MyRelatives() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const persons = datas.relatives;
  const [family, setFamily] = useState(
    Object.keys(persons.family).map((member) => persons.family[member])
  );
  const [familyIndex, setFamilyIndex] = useState(0);
  const [friends, setFriends] = useState(
    Object.keys(persons.friends).map((member) => persons.friends[member])
  );
  const [friendsIndex, setFriendsIndex] = useState(0);
  const [others, setOthers] = useState(
    Object.keys(persons.others).map((member) => persons.others[member])
  );
  const [othersIndex, setOthersIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickLeftFam = () => {
    if (familyIndex === 0) {
      setFamilyIndex(family.length - 1);
    } else {
      setFamilyIndex(familyIndex - 1);
    }
  };

  const handleClickRightFam = () => {
    if (familyIndex === family.length - 1) {
      setFamilyIndex(0);
    } else {
      setFamilyIndex(familyIndex + 1);
    }
  };

  const handleClickLeftFr = () => {
    if (friendsIndex === 0) {
      setFriendsIndex(friends.length - 1);
    } else {
      setFriendsIndex(friendsIndex - 1);
    }
  };

  const handleClickRightFr = () => {
    if (friendsIndex === friends.length - 1) {
      setFriendsIndex(0);
    } else {
      setFriendsIndex(friendsIndex + 1);
    }
  };

  const handleClickLeftOthers = () => {
    if (othersIndex === 0) {
      setOthersIndex(others.length - 1);
    } else {
      setOthersIndex(othersIndex - 1);
    }
  };

  const handleClickRightOthers = () => {
    if (othersIndex === others.length - 1) {
      setOthersIndex(0);
    } else {
      setOthersIndex(othersIndex + 1);
    }
  };

  return (
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
        <button onClick={handleClickLeftFam}>Left</button>
        <button onClick={handleClickRightFam}>Right</button>
        {family && (
          <RelativeCard
            name={family[familyIndex].name}
            relation={family[familyIndex].relation}
            phone={family[familyIndex].phone}
            imgUrl={family[familyIndex].imgUrl}
            presentation={family[familyIndex].presentation}
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <button onClick={handleClickLeftFr}>Left</button>
        <button onClick={handleClickRightFr}>Right</button>
        {friends && (
          <RelativeCard
            name={friends[friendsIndex].name}
            relation={friends[friendsIndex].relation}
            phone={friends[friendsIndex].phone}
            imgUrl={friends[friendsIndex].imgUrl}
            presentation={friends[friendsIndex].presentation}
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <button onClick={handleClickLeftOthers}>Left</button>
        <button onClick={handleClickRightOthers}>Right</button>
        {others && (
          <RelativeCard
            name={others[othersIndex].name}
            relation={others[othersIndex].relation}
            phone={others[othersIndex].phone}
            imgUrl={others[othersIndex].imgUrl}
            presentation={others[othersIndex].presentation}
          />
        )}
      </TabPanel>
    </div>
  );
}

export default MyRelatives;
