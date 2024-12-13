import { useData } from '../data/DataContext';
import './FileComponent.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function FileComponent(props) {

    const dataContext = useData()

    function handleFileClick() {
        dataContext.fileClick(props.fileName)
    }

    return (
        <div className="file-div" onClick={handleFileClick}>
            <span className='icon-right-space'>
                <InsertDriveFileIcon color='primary' />
            </span>{props.fileName}
        </div>
    )
}

export default FileComponent