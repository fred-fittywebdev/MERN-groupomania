import { createStyles, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    [theme.breakpoints.down('sm')]: {

        mainContainer: {
            flexDirection: "column-reverse",
        }
    }

}))