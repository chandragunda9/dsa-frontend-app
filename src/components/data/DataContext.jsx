import { createContext, useContext, useEffect, useState } from "react"
import { retrieveFileContentApi, retrieveContentApi } from "../api/DSAClient"

const DataContext = createContext()

export const useData = () => useContext(DataContext)

function ContextProvider({ children }) {

    console.log(children);

    // default path
    const [pathContent, setPathContent] = useState('codes/')

    console.log('path is ' + pathContent)

    const folders = []
    const files = []

    const [folderList, setFolderList] = useState(folders)
    const [fileList, setFileList] = useState(files)
    const [fileContent, setFileContent] = useState('')
    const [noDataAvailable, setNoDataAvailable] = useState(false)

    useEffect(
        () => fetchContent(), [pathContent]
    )

    function fetchContent() {
        retrieveContentApi(pathContent)
            .then((res) => {
                console.log(res.data);
                setFolderList(res.data.folders)
                setFileList(res.data.files)
                setFileContent(res.data.fileContent)

                setNoDataAvailable(res.data.folders.length === 0 && res.data.files.length === 0 && res.data.fileContent.length === 0)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function folderClick(folderName) {
        setPathContent(pathContent + folderName + "/")
    }

    function fileClick(fileName) {
        setPathContent(pathContent + fileName)
    }

    const valueToShare = { pathContent, folderList, fileList, fileContent, folderClick, fileClick, noDataAvailable }

    return (
        <DataContext.Provider value={valueToShare}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider