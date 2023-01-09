/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line import/no-anonymous-default-export
export default ({member, handleClose, handleChange}) => {
    return (
        <dialog id="medal-member" open>
            <article>
                <a href="#close" 
                    area-label="Close"
                    className="close"
                    data-target="modal-member"
                    onClick={handleClose}>
                </a>
                <hgroup>
                <   div style={{
                            display: "flex",
                            gap: '1rem'
                        }}>
                        <img style={{width: '200px'}} src={`images/${member.slug}.svg`} alt={member.name}></img>
                        <hgroup>
                            <h1>{member.name}</h1>
                            <p>{member.bio}</p> 
                            <hgroup style={{
                                display: "flex",
                                gap: "1rem",
                                marginTop: "1rem",
                                justifyContent: "space-between"
                            }}>
                                <a className="outline" href="#" role="button"
                                onClick={() => {handleChange(Number(member.id) - 1)}}>
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </a>
                                <a className="outline" href="#" role="button"
                                onClick={() => {handleChange(Number(member.id) + 1)}}>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </hgroup>
                        </hgroup>
                    </div>
                </hgroup>
            </article>
        </dialog>
    )
}