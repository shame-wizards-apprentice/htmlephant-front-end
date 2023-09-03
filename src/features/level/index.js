import React from 'react'
import { connect } from 'react-redux'



function Level(props) {

    return (
        <div className="level">
            <h2 id="level">Level: {props.level}</h2>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.user,

    }
}

export default connect(mapStateToProps)(Level)
