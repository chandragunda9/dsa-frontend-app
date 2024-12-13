import './FileBlockComponent.css'

import { useData } from '../data/DataContext'

import FileComponent from './FileComponent'

function FileBlockComponent() {

    const dataContext = useData()
    const files = dataContext.fileList

    return (
        files.length === 0 ?
            (<></>) :
            (
                <section className="file-block-section">
                    <h2 style={{ color: 'brown' }}>Files</h2>

                    <hr />
                    {
                        files.map(file =>
                            <FileComponent fileName={file} key={file} />
                        )
                    }
                </section>
            )
    )
}

export default FileBlockComponent