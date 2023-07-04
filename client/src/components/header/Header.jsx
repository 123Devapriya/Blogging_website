import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #64CCC5;

    & > div {
        display: flex;
        align-items: center;
    }

    & > div > a {
        padding: 20px;
        color: black;
        text-decoration: none;
        font-family: Arial, sans-serif; /* Specify the desired font family */
        font-weight: bold; /* Make the text bold */
    }
`;

const LogoutButton = styled(Button)`
    color: black !important;
    font-family: Arial, sans-serif; /* Specify the desired font family */
    font-weight: bold; /* Make the text bold */
`;

const Header = () => {
    const navigate = useNavigate();

    const logout = async () => navigate('/account');
    
    return (
        <Component>
            <Container>
                <div>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                </div>
                <div>
                    <LogoutButton onClick={logout}>LOGOUT</LogoutButton>
                </div>
            </Container>
        </Component>
    );
}

export default Header;
