import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './UserOrchard.css'

const useStyles = makeStyles({
    root: {
        color: 'green',
    }
});
  
function valuetext(value) {
    return `${value} years`;
}

const marks = [
    {
      value: 0,
      label: '0 Years',
    },
    {
      value: 10,
      label: '10 Years',
    },
    {
        value: 20,
        label: '20 Years',
    },
    {
        value: 30,
        label: '30 Years',
    },
    {
        value: 40,
        label: '40 Years',
    },
    {
      value: 50,
      label: '50 Years',
    },
    {
      value: 60,
      label: '60 Years',
    },
  ];

const donation_data = [
    {
        donation_id: "1",
        donation_amount: 10,
    },
    {
        donation_id: "2",
        donation_amount: 20,
    },
    {
        donation_id: "3",
        donation_amount: 20,
    },
]

let total_donations = 0
for (let donation of donation_data) {
    total_donations = total_donations + donation.donation_amount
}

const tree_data = [
    {
      tree_id: "1",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage0"
    },
    {
      tree_id: "2",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage1"
    },
    {
      tree_id: "3",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage2"
    },
    {
      tree_id: "4",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage3"
    },
    {
      tree_id: "5",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage2"
    },
    {
      tree_id: "6",
      user_id: "1",
      type: "Dummy",
      current_stage: "Stage0"
    },
]

const tree_list=tree_data.map((tree) => {
    const stage=tree.current_stage
    return <img src={tree.type + stage + '.png'} alt={tree.type} key={tree.id}/>
})

const user_data = {
    username: "Test User"
}  

const UserOrchard = () => {
    const classes = useStyles();

    const [yearsPassed, setYearsPassed] = useState(0);

    useEffect(() => {

    })

    
    return (
        <>
            <div className="UserOrchard">
                <h2>{user_data.username}'s Forest</h2>
                <div className="Trees">
                    {tree_list}
                </div>
                <h3>Total Trees Planted:</h3>  
                <h3>{tree_data.length}</h3>
                <h3>Total Donations:</h3>  
                <h3>£{total_donations}</h3>         
            </div>
                <div className="Slider">
                    <div className={classes.root}>
                    <Typography id="discrete-slider" gutterBottom>
                    Time Elapsed:
                    </Typography>
                    <Slider
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={2}
                        marks={marks}
                        min={0}
                        max={60}
                    />
                </div>
            </div>
        </>
    )
}
  
export default UserOrchard
  