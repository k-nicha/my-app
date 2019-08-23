import React from 'react'
import './recepies.css'
import SingleRecepie from './SingleRecepie.js'

const data = [
    {
        key: 'tuna',
        description: 'Tuna salad'
    },
    {
        key: 'caesar',
        description: 'Caesar salad'
    },
    {
        key: 'mixed',
        description: 'Mixed salad'
    },
    {
        key: 'pesto',
        description: 'Pesto salad'
    }
]

const Recepies = () => {
    const components = data.map((element) => {
        return <SingleRecepie
            key={element.key}
            description={element.description}
        />
    })
    
    return <div id='recepies' className='flex-container'>
        {components}
        {/* <div className='flex-item'>
            <div id='caesar'>Caesar salad</div>
            <button className='btn btn-success'
            onClick={() => store.dispatch(addItemToFavorites('caesar'))}>
                Add to favorites
            </button>
        </div>
        <div className='flex-item'>
            <div id='mixed'>Mixed salad</div>
            <button className='btn btn-success'
            onClick={() => store.dispatch(addItemToFavorites('mixed'))}>
                Add to favorites
            </button>
        </div>
        <div className='flex-item'>
            <div id='pesto'>Pesto salad</div>
            <button className='btn btn-success'
            onClick={() => store.dispatch(addItemToFavorites('pesto'))}>
                Add to favorites
            </button>
        </div> */}
        </div>
}

export default Recepies