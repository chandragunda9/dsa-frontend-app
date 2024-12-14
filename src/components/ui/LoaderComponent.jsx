import { useData } from '../data/DataContext'
import './LoaderComponent.css'

function LoaderComponent() {

    const dataContext = useData()

    return (
        !dataContext.isLoading ?
            (<></>) :
            (<div className="loader-overlay">
                <div className="loader-spinner">

                </div>
            </div>)
    )
}

export default LoaderComponent