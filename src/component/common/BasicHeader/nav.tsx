import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  labelFont: {
    fontSize: '20px !important',
    lineHeight: '60px !important',
    color: '#40aea8 !important',
    // borderBottom: '4px solid #40aea8 !important',
  },
});

const MTabs = withStyles({
  indicator: {
    height: '4px !important',
    backgroundColor: '#40aea8 !important',
  },
})(Tabs);

function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <MTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.labelFont} label="首页" />
        <Tab className={classes.labelFont} label="项目中心" />
        <Tab className={classes.labelFont} label="人才广场" />
      </MTabs>
    </Paper>
  );
}

export default Nav;
