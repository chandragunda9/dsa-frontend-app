import { createContext, useContext, useEffect, useState } from "react"
import { retrieveContentApi } from "../api/DSAClient"

const DataContext = createContext()

export const useData = () => useContext(DataContext)

function ContextProvider({ children }) {

    // default path
    const [pathContent, setPathContent] = useState('/')

    console.log('path is ' + pathContent)

    const folders = []
    const files = []

    const [folderList, setFolderList] = useState(folders)
    const [fileList, setFileList] = useState(files)
    const [fileContent, setFileContent] = useState('')
    const [noDataAvailable, setNoDataAvailable] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(
        () => fetchContent(), [pathContent]
    )

    function fetchContent() {
        setLoading(true)
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
            .finally(
                setLoading(false)
            )
    }

    function folderClick(folderName) {
        setPathContent(pathContent + folderName + "/")
    }

    function fileClick(fileName) {
        setPathContent(pathContent + fileName)
    }

    function linkClick(path) {
        setPathContent(path)
    }

    const valueToShare = { pathContent, folderList, fileList, fileContent, folderClick, fileClick, linkClick, noDataAvailable, isLoading }

    return (
        <DataContext.Provider value={valueToShare}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider