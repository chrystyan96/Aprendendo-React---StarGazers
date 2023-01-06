import { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [cast, setCast] = useState([]);
    const selected = [];

    async function fetchCast() {
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    useEffect(() => {
        fetchCast();
    });

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
            gap: `1em`,
            marginBottom: `1em`
        }}>
            {
                cast.map((member, index) => (
                    <a key={member.id} data-tooltip={member.name}>
                        <img src={`images/${member.slug}_tn.svg`} alt={member.name}></img>
                    </a>
                ))
            }
        </div>
    )
}