import PathComponent from "./PathComponent"
import './DSAComponent.css'
import HeaderComponent from "./HeaderComponent"
import FolderBlockComponent from "./FolderBlockComponent"
import FileBlockComponent from "./FileBlockComponent"
import ContextProvider from "../data/DataContext"
import FilePreviewComponent from "./FilePreviewComponent"
import NoDataComponent from "./NoDataComponent"
import LoaderComponent from "../ui/LoaderComponent"

function DSAComponent() {

    return (
        <main>
            <ContextProvider>
                {/* showing header */}
                <HeaderComponent />
                {/*  showing the folder structure where the user from */}
                <PathComponent />
                <FolderBlockComponent />
                <FileBlockComponent />
                <FilePreviewComponent />
                <NoDataComponent />
                <LoaderComponent />
            </ContextProvider>
        </main>
    )
}

export default DSAComponent