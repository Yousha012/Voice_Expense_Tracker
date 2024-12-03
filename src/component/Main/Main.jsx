import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyle from './style'
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyle(); 
  return (
    <div>
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight:'1.5em', marginTop:'20px'}}>
                    {/* Card Info... */}
                    Try Saying: Add Income For $100 In Category Salary For Monday...
                </Typography>
                <Divider/>
                {/* Form */}
                <Form/>
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* List */}
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Main