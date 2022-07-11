// import { Grid } from "@mui/material";

// const Home = () => {
//   return <>
//    <Grid container justifyContent='center'>
//     <Grid item sm={10}>
//     <h1>Welcome to Bank</h1>
//     <hr />
//         <p>
//         Using your Bank of India Internet Banking Account,
//          you can pay your bills like Electricity, T
//         elephone, Satellite Television, Mobile Phone etc.  </p>
//         <p>
//          You can also pay your Insurance Premium, 
//         Credit Card Bills etc.You can shop online using Bank of India Account.</p>



//         <h6>Copyright © 2021 - All Rights Reserved - Official website of Life Insurance Corporation of India.
// Content on this website is published and managed by Life Insurance Corporation of India.
// Corporate Office : Yogakshema Building, Jeevan Bima Marg, P.O. Box No – 19953, Mumbai – 400 021 IRDAI Reg No- 512
// Life Insurance Corporation of India, Administrative Officer, Corporate Communication Dept.</h6>
      
//         </Grid>
//         </Grid>

//     </>;
// };

// export default Home;


import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/groco.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer' >
          <h1> GROCERIES..</h1>
          <p>Fresh Groceries For A Healthy Life </p>
        <Link to="/menu">
          
          <button >OrderNow</button>
        </Link>

      </div>
    </div>
  )
}

export default Home

