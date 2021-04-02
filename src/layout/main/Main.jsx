import React from "react";
import {Header, Loader, Dimmer} from "semantic-ui-react";
import style from './style.module.css'
import Films from "../../components/movies/Films";


const Main = (props) => {
    console.log(props)
    const {errorMessage, loading, films} = props
    return (<>
            <div className={style.container}>
                <Header as='h1'>Movies</Header>
                <p>All movies in here</p>
                <div className={style.main}>
                    {loading && !errorMessage ? (
                        <Dimmer active inverted>
                            <Loader inverted content='Loading'/>
                        </Dimmer>) : errorMessage ? (<span2>{errorMessage}</span2> &&
                        <img src="https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png"
                             alt="not found"/>) :
                        <Films films={films}/>
                    }
                </div>
            </div>

        </>

    )
}

export default Main