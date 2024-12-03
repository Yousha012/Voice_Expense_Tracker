import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../Context/Context'
import useStyles from './style'
import { type } from '@testing-library/user-event/dist/type'


const List = () => {
    const classes = useStyles();
    // const { deleteTransection} = useContext(ExpenseTrackerContext);

    console.log("" )

    const transections = [
        { id: 1, type: 'Income', category: 'Salary', amount: 50, date: "Tue Dec 03"},
        { id: 1, type: 'Expense', category: 'text', amount: 40, date: "Tue Dec 04"}, 
    ];


  return (
    <MUIList dense={false} className={classes.list}>
        {transections.map(( transection ) => (
            <Slide direction="down" in mountOnEnter mountOnExit key={transection.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transection.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff/>
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary={transection.category} secondary={`$ ${transection.amount} - ${transection.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick=''>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

            </Slide>
        ))}

    </MUIList>
    
  )
}

export default List