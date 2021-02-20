import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Button,Grid} from '@material-ui/core';
import {Buttons} from './ListItems';
import TextField from './TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  gridList:{
    backgroundColor: '#f1f3f4',
    

  },
  button:{
      width:'10%',
      margin:'1%',
      color: '#202124',
      cursor: 'pointer',
      border: '1px solid #f1f3f4',
      borderRadius: '4px',
      height:'10%',
      backgroundColor: '#f1f3f4',
      '&:hover':{
        color:'#f0f8ff'
    }   
  }
}));

export default function Calculator() {
  const classes = useStyles();
  const [inputVal ,setInput]=useState({
       input :'',
       result:''
  })

  const onclickHandle=(val)=>{
      console.log(val)
      setInput(val)
    //   if(val=== '='){
    //       const res=eval(inputVal)
    //    //  setResult(res)
    //     return
    //   }
    // //   if(val === '=') {
    // //       let expression=eval(inputVal)
    //      setInput(inputVal => inputVal + val)

    // //   } 
     
  }

  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item lg={12} md={12} style={{display:'flex',flexDirection:'column'}}>
     <TextField id="input" value={inputVal.input}/>
      <TextField  value={inputVal.result}/>
    </Grid>
    </Grid>
      <GridList cellHeight={30}  className={classes.gridList} cols={5} >
        {Buttons.map((tile,index) => (
            <Button  onClick={()=>onclickHandle(tile.label)}key={index} className={classes.button}variant="contained" color="primary">{tile.label}</Button>
        ))}
      </GridList>
    </div>
  );
}
