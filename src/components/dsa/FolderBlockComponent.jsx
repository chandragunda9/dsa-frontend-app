import { useData } from '../data/DataContext'
import './FolderBlockComponent.css'
import FolderComponent from './FolderComponent'

function FolderBlockComponent() {

    const dataContext = useData()
    const folders = dataContext.folderList

    return (
        folders.length === 0 ?
            (<></>) :
            (
                <section className="folder-block-section">
                    <h2 style={{ color: 'brown' }}>Folders</h2>

                    <hr />
                    {
                        folders.map(folder =>
                            <FolderComponent folderName={folder} key={folder} />
                        )
                    }
                </section>
            )
    )
}

export default FolderBlockComponent