import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    desktop: {
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
    },

    mobile: {
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        },
    },

    amin: {
        [theme.breakpoints.up('sm')]:{
            padddingBottom: '5%',
        },
    },

    last: {
        [theme.breakpoints.up('sm')]:{
            marginBttom: theme.spacing(3),
            padddingBottom: '200px',
        },
    },

    grid: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));