import {Button, Checkbox, Input} from "semantic-ui-react";
import React, {useState} from "react";
import style from './style.module.css'


const SearchInput = (props) => {

    const [searchFilm, setSearchFilm] = useState('')
    const [type, setType] = useState('all')
    const handleKey = (event) => {
        if (event.key === 'Enter') {
            props.searchMovies(searchFilm, type)
        }
    }


    const handleFilter = (e, {value}) => {
        setType(() => (value))
        props.searchMovies(searchFilm,  (value))

    }


    return (
        <>
            <Input
                name='film'
                onChange={(e) => setSearchFilm(e.target.value)}
                placeholder='Search...'
                onKeyDown={handleKey}
            />
            <Button onClick={() => props.searchMovies(searchFilm, type)}
                    animated="fade"
                    size='large'>
                Search...
            </Button>
            <div className={style.check}>
                <Checkbox radio
                          label='All'
                          name='checkboxRadioGroup'
                          value='all'
                          checked={type === 'all'}
                          onChange={handleFilter}/>
                <Checkbox radio
                          label='Movies only'
                          name='checkboxRadioGroup'
                          value='movie'
                          checked={type === 'movie'}
                          onChange={handleFilter}/>
                <Checkbox radio
                          label='Series only'
                          name='checkboxRadioGroup'
                          value='series'
                          checked={type === 'series'}
                          onChange={handleFilter}/>
            </div>
        </>

    )


}

export default SearchInput