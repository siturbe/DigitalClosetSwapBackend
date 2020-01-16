import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
//   const [topOrBottom, setTopOrBottom] = React.useState('');

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(nputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = event => {
//     setTopOrBottom(event.target.value);
//   };
const {onChange, value, name } = props;
console.log(value);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Top or Bottom</InputLabel>
        <Select
          name={name}
          id="simple-select"
          value={value}
          onChange={onChange}
        >
          <MenuItem value="top" >Top</MenuItem>
          <MenuItem value="bottom">Bottom</MenuItem>
        </Select>
      </FormControl>

      
    </div>
  );
}
