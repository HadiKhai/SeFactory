import React from 'react';
import {Button, Divider, Grid, Link, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@emotion/react";
import {makeStyles} from "@mui/styles";
import homeBG from "../../assets/homeBG.jpeg";
import comSkills from "../../assets/comSkills.jpeg";
import {GREEN, GREY} from "../utils/constants";
import fullStackWeb from "../../assets/fullStackWeb.png";
import foundationOfComputer from "../../assets/foundationOfComputer.png";
import RPPartners from "../../assets/RP+partner+logos.jpeg";
import Wassim from "../../assets/WassimElHajj.jpeg";
import Forbes from "../../assets/media/forbes.png";
import Tech from "../../assets/media/techCrunch.png";
import TG from "../../assets/media/theguardian.png";
import TV from "../../assets/media/TV.png";
import Lorient from "../../assets/media/lorient.png";
import Entr from "../../assets/media/entrepreuner.png";
import Wamda from "../../assets/media/wamda.png";
import Exec from "../../assets/media/exec.png";
import Fanar from "../../assets/partners/fanar.jpg";
import Life from "../../assets/partners/life.jpg";
import Education from "../../assets/partners/educationFund.jpg";
import Hopes from "../../assets/partners/hopes.png";
import EU from "../../assets/partners/EU.png";
import BDD from "../../assets/partners/beirutDigitalDistrict.jpeg";
import Biat from "../../assets/partners/biat.jpg";
import LIU from "../../assets/partners/LIU.jpg";
import BeryTech from "../../assets/partners/beryTech.jpg";
import Spark from "../../assets/partners/spark.jpg";
import Laser from "../../assets/partners/laser.jpg";

const useStyle = makeStyles(() => ({
    text: {
        margin:'auto !important'
    }
}))

const HomePage = () => {

    const stats = [
        {
            firstLine:'90%',
            secondLine:'Employment Success Rate'
        },
        {
            firstLine:'500+',
            secondLine:'Youth Trained Since 2016'
        },
        {
            firstLine:'125+',
            secondLine:'Global Recruitment Partner Companies'
        },

    ]

    const classes = useStyle()

    const theme = useTheme();

    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div
            style={{
                minHeight:'100vh',
            }}>
            <div style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeBG})`,
            }}>
                <Grid container style={{
                    paddingTop: 'calc( 85vmax / 5 + 100px ) !important',
                    padding:'calc( 85vmax / 5 + 100px ) 7vw 7vw 7vw'
                }}>
                    <Grid item sx={6} lg={6} md={6}>
                        <Typography
                            variant="h2"
                            color="white"
                            style={{
                                fontSize: 'calc((3.5 - 1) * 1.2vh + 1rem)'
                            }}
                            mb={3}>
                            <span style={{fontWeight:'bold'}}> Empowering youth</span>
                            <br/>
                            with tech jobs.
                        </Typography>
                        <Typography variant="h5" color="white" mb={3}>
                            SE Factory’s top-ranked training programs graduate tech professionals working for companies all over the world.
                        </Typography>
                        <Button style={{
                            padding:'10px 15px',
                            borderRadius:'0.4rem',
                            color:'white'
                        }}
                                variant="contained"
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Grid container style={{
                padding:'3.5vmax 7vw'
            }}>
                {
                    stats.map((e)=>
                        <Grid item sx={12} sm={12} lg={4} md={4} style={{
                            width:'100%'
                        }}>
                            <Typography textAlign="center" variant='h3' color="primary" fontWeight="bold">
                                {e.firstLine}

                            </Typography>
                            <Typography
                                textAlign="center"
                                variant='h5'
                                fontWeight="bold"
                                maxWidth="20ch"
                                style={{
                                    margin:'auto !important'
                                }}
                                className={classes.text}
                            >
                                {e.secondLine}
                            </Typography>
                            <Typography textAlign="center" variant='h3'>
                                -
                            </Typography>
                        </Grid>
                    )

                }

            </Grid>
            <Grid container style={{
                padding:'calc( 45vmax / 10 ) 7vw'
            }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={comSkills} width="100%"  alt={"skills"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} paddingX={matchesSm? 0:4} >
                    <Typography variant="h4" mb={3}>
                        Get the skills<br/>
                        <span style={{fontWeight:'bold'}}> companies look for.</span>
                    </Typography>
                    <Typography variant="h5" marginLeft={4}>
                        Learn how to become a professional Full Stack Web Developer. Acquire technical and interpersonal skills, and gain access to a vast network of employers.
                    </Typography>
                    <Link href="#" marginLeft={4}
                          style={{
                              textUnderlineOffset: '0.2em'
                          }}
                    >Learn more →</Link>
                </Grid>
            </Grid>
            <Grid container style={{
                backgroundColor:GREEN,
                padding:'3.3vmax 7vw',
            }}>
                <Grid item xs={12}>
                    <Typography variant="h3" color="white" textAlign="center">
                        Discover the program
                    </Typography>
                    <Typography variant="h3" color="white" fontWeight="bold" textAlign="center">
                        that’s right for you.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <img src={fullStackWeb} width="100%" style={{ maxWidth:'1450px'}}  alt={"fullstackWeb"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <img src={foundationOfComputer} width="100%" style={{ maxWidth:'1450px'}} alt={"foundation"}/>
                </Grid>
            </Grid>
            <Grid container style={{
                padding:'calc( 45vmax / 10 ) 7vw'
            }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={comSkills} width="100%" alt={"skills"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} paddingX={matchesSm? 0:4} >
                    <Typography variant="h4" mb={3}>

                        Our graduates are<br/>
                        <span style={{fontWeight:'bold'}}> market ready.</span>
                    </Typography>
                    <Typography variant="h5" marginLeft={4}>
                        Students go through deep technical training, including robust theory and intensive coding, with emphasis on critical thinking and a can-do attitude.                        </Typography>
                    <Link href="#" marginLeft={4}
                          style={{
                              textUnderlineOffset: '0.2em'
                          }}
                    >Learn more →</Link>
                </Grid>
            </Grid>
            <div style={{
                display:'flex',
                placeItems:'center',
                flexDirection:'column',
                padding:'calc( 20vmax / 10 ) 7vw'
            }}>
                <Typography variant="h4" textAlign="center" style={{width:matchesSm?'100%':'70%'}} mb={3}>
                    Join our <span style={{fontWeight:'bold'}}>Global Recruitment Partner Network</span>  and access top talent wherever you are.
                </Typography>
                <Typography variant="h6" textAlign="center" style={{width:matchesSm?'100%':'70%'}} mb={3}>
                    145+ companies from over 10 countries have joined our network since 2016

                </Typography>
                <img style={{width:'100%', marginBottom:'20px'}}  src={RPPartners} alt={'partners'}/>
                <img style={{width:'100%'}}  src={Wassim} alt={'wassim'}/>
            </div>
            <Grid container style={{
                backgroundColor:GREY,
                padding:'3.3vmax 7vw',
            }}>
                <Grid item xs={12}>
                    <Typography textAlign="center" variant='h4' fontWeight="bold">
                        In The Media

                    </Typography>
                    <Typography textAlign="center" variant='h4'>
                        -
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Forbes} alt={"forbes"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Tech} alt={"tech"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={TG} alt={"tg"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={TV} alt={"tv"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Lorient} alt={"lorient"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Entr} alt={"entr"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Wamda} alt={"wamda"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <img style={{width:'100%'}}  src={Exec} alt={"exec"}/>
                </Grid>
            </Grid>
            <Grid container style={{
                padding:'3.3vmax 7vw',
            }}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Typography textAlign="start" variant='h4' fontWeight="bold">
                        Our Partners

                    </Typography>
                    <Typography textAlign="start" variant='h4' mb={3}>
                        -
                    </Typography>
                    <Typography textAlign="start" variant='h6'>
                        SE Factory partners have been critical to the success, growth, and expansion of our programs.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Divider variant="middle" />
                    <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}  mt={4}>
                        Funding Partners
                    </Typography>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Fanar} alt={"fanar"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Life} alt={"life"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Education} alt={"edu"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Hopes} alt={"hopes"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={EU} alt={"eu"}/>

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Divider variant="middle" />

                    <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}  mt={4}>
                        Strategic Partners
                    </Typography>
                    <img style={{width:'100%',marginTop:'20px'}}  src={BDD} alt={"bdd"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Biat} alt={"biat"}/>

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <Divider variant="middle" />

                    <Typography variant="h5" fontWeight={"bold"} textAlign={"center"} mt={4}>
                        Community Partners
                    </Typography>
                    <img style={{width:'100%',marginTop:'20px'}}  src={LIU} alt={"liu"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={BeryTech} alt={"berytech"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Spark} alt={"spark"}/>
                    <img style={{width:'100%',marginTop:'20px'}}  src={Laser} alt={"laser"}/>

                </Grid>
            </Grid>
            <Grid container style={{
                backgroundColor:GREY,
                padding:'3.3vmax 7vw',
            }}>
                <Grid item xs={12}>
                    <Typography textAlign="center" variant='h4' fontWeight="bold">
                        Subscribe to our newsletter

                    </Typography>
                    <Typography textAlign="center" variant='h4'>
                        and stay up-to-date with our latest news.
                    </Typography>
                    <div style={{
                        display:'flex',
                        placeContent:'center',
                        marginTop:'20px'
                    }}>
                        <Button style={{
                            padding:'10px 15px',
                            borderRadius:'0.4rem',
                            color:'white'
                        }}

                                variant="contained"
                        >
                            Subscribe
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;