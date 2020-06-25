import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Alert.scss';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {};
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ alertClick }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState();
  const [open, setOpen] = React.useState(false);

  const buttonClick = useRef(null);

  useEffect(() => {
    if (alertClick) {
      buttonClick.current.click();
    }
  }, [alertClick]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="alertModal container">
        <div className="hand">
          <img src="/icons/hand.svg"></img>

          <div>
            <h2>HEY !</h2>
          </div>
        </div>

        <div className="img">
          <img src="/img/capsule.png"></img>
        </div>

        <div>
          <h2>It’s time to take your medication</h2>

          <div>
            <strong>medoc 1 :</strong> 2 comprime
          </div>
        </div>

        <div className="footer">
          <button>
            <div>Close </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className="popButton"
        type="button"
        onClick={handleOpen}
        ref={buttonClick}
        style={{ display: 'none' }}
      >
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
