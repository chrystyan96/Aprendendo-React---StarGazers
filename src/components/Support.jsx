import { useState, useEffect } from 'react';
const pageTitle = document.title;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        count && (document.title = `${pageTitle} - ${count}`)
    })

    return (
        <button className='outline' onClick={() => setCount(count+1)}>
            {count === 0 ? "Click to support" : `Suported ${count} times`}
        </button>
    )
}