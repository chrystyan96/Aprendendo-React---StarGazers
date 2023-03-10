import './Nav.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({cast, onChoice}) => {
    return (
        <nav className="container">
            <ul>
                <li>
                    <details role="list">
                        <summary aria-haspopup="listbox" role="link">Cast</summary>
                        <ul role="listbox">
                            {cast.map(member => (
                                <li key={member.id}>
                                    <a onClick={() => {onChoice(member)}} 
                                    data-tootip={member.name}>{member.name}</a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">
                        <img style={{height: '50px'}} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}