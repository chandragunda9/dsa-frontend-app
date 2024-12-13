import { useData } from '../data/DataContext';
import './FolderComponent.css'

import FolderIcon from '@mui/icons-material/Folder';

function FolderComponent(props) {

    const dataContext = useData()

    function handleFolderClick() {
        dataContext.folderClick(props.folderName)
    }

    return (
        <div className="folder-div" onClick={handleFolderClick}>
            <span className='icon-right-space'><FolderIcon color='success' /></span>{props.folderName}
        </div>
    )
}

export default FolderComponent