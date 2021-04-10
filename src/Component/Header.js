import React from 'react'
import {Avatar} from '@material-ui/core'
import {useDataLayerValue} from "../DataLayer"

import "./Header.css"
export default function Header() {
    const [{user}, dispatch]= useDataLayerValue();

    return (
        <div>
            <div className="header">
                <div className="left">

                </div>
                <div className="right">
                <Avatar src={user?.images[0].url} />
                <h3> {user?.display_name}</h3>
                </div>
            </div>
        </div>
    )
}

