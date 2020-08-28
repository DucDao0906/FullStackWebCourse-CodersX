import React from 'react'

export default function List({data, render}) {
    return (
        <div>
            {
                data.map(render)
            }
        </div>
    )
}
