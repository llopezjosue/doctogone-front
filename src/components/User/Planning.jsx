import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import datas from "../../components/data/datas.json";
import BtnBack from "../Elements/BtnBack";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Planning() {
  const classes = useStyles();
  let locDatas = JSON.parse(window.localStorage.getItem("event"));

  return (
    <div>
    <div>
    <Timeline align="alternate">
      {locDatas &&
        locDatas.map((event) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {event.hour}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {event.category === "medic" && <LocalHospitalIcon />}
                  {event.category === "meal" && <FastfoodIcon />}
                  {event.category === "sleep" && <HotelIcon />}
                  {event.category === "social" && <LaptopMacIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {event.title}
                  </Typography>
                  <Typography> {event.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      {datas.events.map((event) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {event.hour}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {event.category === "medic" && <LocalHospitalIcon />}
                {event.category === "meal" && <FastfoodIcon />}
                {event.category === "sleep" && <HotelIcon />}
                {event.category === "social" && <LaptopMacIcon />}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {event.title}
                </Typography>
                <Typography> {event.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
    </div>
    <div>
    <BtnBack/>
    </div>
    </div>
  );
}
