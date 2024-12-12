import { useData } from '../data/DataContext';
import './FileComponent.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function FileComponent(props) {
    console.log(props);
    console.log(props.fileName);

    const dataContext = useData()

    function handleFileClick() {
        dataContext.fileClick(props.fileName)
    }

    return (
        <div className="file-div" onClick={handleFileClick}>
            <span><InsertDriveFileIcon /></span>{props.fileName}
        </div>
    )
}

export default FileComponent