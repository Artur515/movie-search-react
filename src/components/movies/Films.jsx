import Film from '../movie/Film'
import style from './style.module.css'


const Films = ({films}) => {

    return (
        <div className={style.movies}>
            {films.map(film => <Film key={film.imdbID} {...film}/>)}
        </div>
    )
}
export default Films