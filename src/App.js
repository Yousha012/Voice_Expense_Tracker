import React from 'react'
import { Grid } from '@material-ui/core'
import Detail from './component/Details/detail'
import useStyle from './style'
import Main from './component/Main/Main'

const App = () => {
    const classes = useStyle();
  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{height: '100vh'}} >
            <Grid item xs={12} sm={4}>
                <Detail title="Income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Detail title="Expense"/>
            </Grid>

        </Grid>
    </div>
  )
}

export default App