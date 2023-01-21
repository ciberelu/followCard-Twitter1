//importar estilos
import "./App.css"
import TwitterFollowCard from "./TwitterFollowCard"

function App() {

    const formatUserName = (username) =>  `@${username}`
    return (
        <section className="App">
            <TwitterFollowCard
            
            name="Miguel Angel Duran"
            isFollowing
            formatUserName= {formatUserName}


            />

            <TwitterFollowCard
            username="peralph"
            name="Pablo Hernandez"
            isFollowing={false}
            formatUserName= {formatUserName}



            />

            <TwitterFollowCard
            username="elonmusk"
            name="Elon Musk"
            isFollowing
            formatUserName= {formatUserName}



            />
        </section>
    )
}

export default App