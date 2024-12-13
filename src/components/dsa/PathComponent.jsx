import { useEffect, useState } from 'react'
import { useData } from '../data/DataContext'
import './PathComponent.css'

function PathComponent() {
    const dataContext = useData()
    const path = dataContext.pathContent

    let [segments, setSegments] = useState([])
    const [cumulativePathMap, setCumulativePathMap] = useState({});

    useEffect(
        () => mapCummulativePaths(), [path]
    )

    function mapCummulativePaths() {
        segments = path.split('/')

        if (path.endsWith('/')) {
            segments.pop()
        }

        setSegments(segments)

        let n = segments.length

        // Map indices to cumulative paths
        segments.reduce((acc, segment, index) => {
            acc = acc ? `${acc}${segment}/` : `${segment}/`;
            cumulativePathMap[index] = acc;
            return acc;
        }, '');

        if (!path.endsWith('/')) {
            cumulativePathMap[n - 1] = cumulativePathMap[n - 1].slice(0, cumulativePathMap[n - 1].length - 1)
        }

        setCumulativePathMap(cumulativePathMap)
        console.log('cumulativePathMap: ', cumulativePathMap);
    }

    function handleLinkClick(segmentIndex) {
        dataContext.linkClick(cumulativePathMap[segmentIndex])
    }


    return (
        <section className='path-section'>
            {
                segments.map((segment, index) => {
                    return <div style={{ display: 'inline' }}>
                        <button onClick={() => handleLinkClick(index)} key={index} className='path-link'>
                            {segment}</button>
                        {index != segments.length - 1 && <span className='delimiter'>/</span>}
                        {index == segments.length - 1 && path.endsWith('/') && <span className='delimiter'>/</span>}
                    </div>
                })
            }
        </section>
    )
}

export default PathComponent