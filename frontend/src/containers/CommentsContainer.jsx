import React from 'react'
import { CommentsComponent } from '../components'

const CommentsContainer = ({lengthComment}) => {
    return (
        <div>
            <CommentsComponent lengthComment={lengthComment}/>
        </div>
    )
}

export default CommentsContainer
