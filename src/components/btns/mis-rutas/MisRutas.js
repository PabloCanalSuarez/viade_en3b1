import React from 'react';
import Button from '@material-ui/core/Button';
import { MenuItem, Menu, Link } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const MisRutas = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                className={classes.button}
            >
                Your Activity <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link underline='none' href={'#/dashboard'}>
                    <StyledMenuItem divider>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="My routes" />
                    </StyledMenuItem>
                </Link>
                <Link underline='none' href={'#/create-route'}>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <EditLocationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create route" />
                    </StyledMenuItem>
                </Link>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2),
    }
}));


export default MisRutas;