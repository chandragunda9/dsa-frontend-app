import './FilePreviewComponent.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import { useEffect, useRef } from 'react';
import { useData } from '../data/DataContext';

function FilePreviewComponent() {
    const dataContext = useData();
    const fileContent = dataContext.fileContent;

    const codeRef = useRef();

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [fileContent]);

    return (
        fileContent?.length === 0 ? (
            <></>
        ) : (
            <section className="file-preview-section">
                <pre>
                    <code ref={codeRef} className='java' style={{
                        fontFamily: 'Lucida sans unicode',
                        fontSize: '18px'
                    }}>
                        {fileContent}
                    </code>
                </pre>
            </section>
        )
    );
}

export default FilePreviewComponent;
