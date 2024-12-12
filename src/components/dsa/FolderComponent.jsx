import { useData } from '../data/DataContext';
import './FolderComponent.css'

import FolderIcon from '@mui/icons-material/Folder';

function FolderComponent(props) {

    console.log(props);
    console.log(props.folderName);

    const dataContext = useData()

    function handleFolderClick() {
        dataContext.folderClick(props.folderName)
    }

    return (
        <div className="folder-div" onClick={handleFolderClick}>
            <span><FolderIcon /></span>{props.folderName}
        </div>
    )
}

export default FolderComponent