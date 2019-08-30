import React, {useState} from 'react'

export default function Results () {
    const [filters, showOrHideFilters] = useState(false)

    return (
        <div>
           
            <button onClick={() => showOrHideFilters(!filters)}>
                Click me Johnny
            </button>

            {
                filters === true &&
                <div> ELEMENTi </div>
            }
        </div>
    )
}