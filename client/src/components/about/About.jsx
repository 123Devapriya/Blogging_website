
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box style={{backgroundColor:"#E6FFFD"}} >
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text style={{color:"black"}} variant="h5">

Welcome to our blogging website! <br/><br/>

We are a passionate team of writers who love to share our thoughts, experiences, and knowledge through our blog posts. Our goal is to provide valuable and engaging content that informs, inspires, and entertains our readers.

Whether you're looking for informative articles, personal stories, or tips and tricks on various topics, you'll find it all here. Our team covers a wide range of subjects, including technology, travel, lifestyle, food, and much more.

We believe in the power of words and the impact they can have. 
<br/>
<br/>
Through our blog, we aim to create a community where people can connect, learn, and grow together. We encourage open discussions and value the diverse perspectives and ideas shared by our readers.

Thank you for being a part of our journey. We hope you enjoy exploring our blog and find value in the content we create. If you have any questions, suggestions, or would like to contribute to our blog, feel free to reach out to us.
<br/><br/>
Happy reading!
<br />
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>. */}
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;