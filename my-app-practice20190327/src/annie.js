import React, {
    Component
} from 'react';

import './annie.css'

const Annie = ({
    data
}) => {
    const dataList = data.map(data => {
        // return ( <
        //     div className = "Annie"
        //     key = {
        //         data.id
        //     } >
        //     <
        //     div > Name: {
        //         data.name
        //     } < /div>   <
        //     div > Age: {
        //         data.age
        //     } < /div>    < /
        //     div >
        // )

        return data.age > 20 ? ( <
            div className = "Annie"
            key = {
                data.id
            } >
            <
            div > Name: {
                data.name
            } < /div>   <
            div > Age: {
                data.age
            } < /div>    < /
            div >
        ) : null
    })
    return ( <
        div className = "dataList" > {
            dataList
        } <
        /div>
    )
}

export default Annie