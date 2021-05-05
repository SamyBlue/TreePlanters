import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './UserOrchard.css';
import GoogleMapReact from "google-map-react";

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
      type: "ash",
      year_planted: 2021,
      lat:52.9516302,
      lng:1.0106029

    },
    {
      tree_id: "2",
      user_id: "1",
      type: "ash",
      year_planted: 2021,
      lat:52.9516302,
      lng:1.0106029
    },
    {
      tree_id: "3",
      user_id: "1",
      type: "pine",
      year_planted: 2021,
      lat:52.9516302,
      lng:1.0106029
    },
    {
      tree_id: "4",
      user_id: "1",
      type: "pine",
      year_planted: 2021,
      lat:52.9516302,
      lng:1.0106029
    },
    {
      tree_id: "5",
      user_id: "1",
      type: "beech",
      year_planted: 2021,
      lat:52.9408065,
      lng:0.9393098
    },
    {
      tree_id: "6",
      user_id: "1",
      type: "beech",
      year_planted: 2021,
      lat:52.9408065,
      lng:0.9393098
    },
]

const current_year = 2021

const SetTreeStage = (type, year_planted, value) => {
    let tree_age = current_year - year_planted
    if (type === "ash") {
        if (tree_age + value === 0 ) {
            return "0"
        } else if (tree_age+value === 2 ) {
            return "1"
        } else if (tree_age+value === 4 ) {
            return "2"
        } else if (tree_age+value > 4 ) {
            return "3"
        }
    }
    else if (type === "pine") {
        if (tree_age + value < 6 ) {
            return "0"
        } else if (tree_age+value < 14 ) {
            return "1"
        } else if (tree_age+value < 32 ) {
            return "2"
        } else if (tree_age+value >= 32 ) {
            return "3"
        }
        
    }
    else if (type === "beech") {
        if (tree_age + value < 20 ) {
            return "0"
        } else if (tree_age+value < 32 ) {
            return "1"
        } else if (tree_age+value < 54  ) {
            return "2"
        } else if (tree_age+value >= 54 ) {
            return "3"
        }
        
    }

}

const user_data = {
    username: "Test User"
}  

const UserOrchard = () => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    /* const AnyReactComponent = ({ text }) => (
        <div style={{
          color: 'white', 
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
      ); */

    // const tree_list=tree_data.map((tree) => {
    //     const stage=SetTreeStage(tree.type, tree.year_planted, value) // stage changes according to value
    //     return (

    //         <img src={tree.type + stage + '.png'} alt={tree.type} key={tree.id} position={{ lat: tree.lat, lng: tree.lng }} />
    // )
    // })

    const AnyReactComponent = ({ children }) => (
        <div style={{
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transform: 'translate(-50%, -50%)',
          width: '250px',
          height: '200px',
        // margin: '20px',
        // border: '1px solid black',
        // position: 'relative'
        }}>
          {children}
        </div>
      );

    return (
        <>
            
                <h2>{user_data.username}'s Orchard</h2>
                <div style = {{height: '500px', width: '100%'}}>


                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCzSDLwakvV-7nq3GXYc1sAapKFiAL8Fd4" }}
                            defaultCenter={{lat: 52.945,lng: 0.986}}
                            defaultZoom={14}
                        >
                    {tree_data.map((tree) => {
                    const stage=SetTreeStage(tree.type, tree.year_planted, value) // stage changes according to value
                    return (
                    <AnyReactComponent lat={tree.lat} 
                    lng={tree.lng} >
                        <img src={tree.type + stage + '.png'} alt={tree.type} key={tree.id} 
                        style={{margin:'0', position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} 
                        />
                    </AnyReactComponent>
                )})}
                        
                  
                        </GoogleMapReact>
                </div>

          
                <div className="Slider">
                    <div className={classes.root}>
                    <Typography id="discrete-slider" gutterBottom>
                    Time Elapsed:
                    </Typography>
                    <Slider
                        value={value}
                        onChange={handleChange}
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
                  <div className="UserOrchard">
                {/* <div className="Trees">
                    {tree_list}
                </div> */}
                <h3>Total Trees Planted:</h3>  
                <h3>{tree_data.length}</h3>
                <h3>Total Donations:</h3>  
                <h3>£{total_donations}</h3>         
            </div>
            </div>
        </>
    )
}
  
export default UserOrchard
  