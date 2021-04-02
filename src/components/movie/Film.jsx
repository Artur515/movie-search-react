import {Image, Card} from "semantic-ui-react";
import style from './style.module.css'

const Film = ({Title, Year, imdbID, Type, Poster}) => {

    return (<div key={imdbID} className={style.cards}>
            <Card>
                {Poster === 'N/A' ?
                    <Image src={`https://via.placeholder.com/415x290?text=${Title}`} wrapped ui={false}/> :
                    <Image src={Poster} wrapped ui={false}/>}
                <Card.Content>
                    <Card.Header>{Title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{Year}</span>
                    </Card.Meta>
                    <Card.Description>
                        {Type}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>

                </Card.Content>
            </Card>
        </div>

    )
}
export default Film