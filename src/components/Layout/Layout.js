import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout