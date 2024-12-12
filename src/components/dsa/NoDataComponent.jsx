import { useData } from '../data/DataContext'
import './NoDataComponent.css'

function NoDataComponent() {

    const dataContext = useData()
    const noDataAvailable = dataContext.noDataAvailable

    return (
        !noDataAvailable ?
            (<></>) :
            (
                <section className="no-data-section">
                    -- No Content--
                </section>
            )
    )
}

export default NoDataComponent