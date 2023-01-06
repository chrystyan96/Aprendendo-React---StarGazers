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
                            <hgroup>
                                <a className="outline" href="#" role="button"
                                onClick={() => {handleChange(Number(member.id) - 1)}}>Previous</a>
                                <a className="outline" href="#" role="button"
                                onClick={() => {handleChange(Number(member.id) + 1)}}>Next</a>
                            </hgroup>
                        </hgroup>
                    </div>
                </hgroup>
            </article>
        </dialog>
    )
}