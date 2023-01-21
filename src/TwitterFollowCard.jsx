import { useState } from "react"


const TwitterFollowCard = ({username = "unkonwn", formatUserName, name}) => {
    

    //utilizacion del hook state

    const [isFollowing, setIsFollowing] = useState(false)

    const handleClick = () => {
        setIsFollowing(!isFollowing) //seteamos el valor de isFollowing con lo contrario a lo que tenga
    }

    //las props deben ser inmutables
    //se aconseja guarda la props en otra constante
    const text = isFollowing ? "siguiendo" : "seguir"
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/${username}`} alt="Avatar Midu" />
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">{formatUserName(username)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                <span className="tw-followCard-text">{text}</span>
                 {/*  => children */}
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard