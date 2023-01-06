// eslint-disable-next-line import/no-anonymous-default-export
export default ({cast, onChoice}) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
            gap: `1em`,
            marginBottom: `1em`
        }}>
            {
                cast.map((member, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onChoice(member)} key={member.id} data-tooltip={member.name}>
                        <img src={`images/${member.slug}_tn.svg`} alt={member.name}></img>
                    </a>
                ))
            }
        </div>
    )
}