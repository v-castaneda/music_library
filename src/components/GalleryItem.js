import { useState } from 'react'

const GalleryItem = (props) => {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
            style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem