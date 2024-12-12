import { useEffect } from 'react'
import { useData } from '../data/DataContext'
import './PathComponent.css'

function PathComponent() {
    const dataContext = useData()

    const path = dataContext.pathContent

    const arr = path.split('/')
    console.log('pathcomp' + arr);

    const pathMap = {}

    useEffect(
        () => mapPaths, [path]
    )

    function mapPaths() {
        let pathStr = ''
        arr.map(
            ele => {
                if (ele != '') {
                    pathStr += (ele + '/')
                    pathMap[ele] = pathStr
                }
            }
        )
        console.log('splitted path ' + JSON.stringify(pathMap));
    }

    return (
        <section className='path-section'>
            <p>{path}</p>
        </section>
    )
}

export default PathComponent