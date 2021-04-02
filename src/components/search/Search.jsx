import {Button, Checkbox, Input} from "semantic-ui-react";
import React, {useState} from "react";
import style from './style.module.css'


class SearchInput extends React.Component {
    state = {
        searchFilm: '',
        type: 'all',
    }


    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.searchFilm, this.state.type)
        }
    }

    handleFilter = (e, {value}) => {
        this.setState(() => ({type: value}), () => {
            this.props.searchMovies(this.state.searchFilm, this.state.type)
        })
    }


    render() {
        return (
            <>
                <Input
                    name='film'
                    onChange={(e) => this.setState({searchFilm: e.target.value})}
                    placeholder='Search...'
                    onKeyDown={this.handleKey}
                />
                <Button onClick={() => this.props.searchMovies(this.state.searchFilm, this.state.type)}
                        animated="fade"
                        size='large'>
                    Search...
                </Button>
                <div className={style.check}>
                    <Checkbox radio
                              label='All'
                              name='checkboxRadioGroup'
                              value='all'
                              checked={this.state.type === 'all'}
                              onChange={this.handleFilter}/>
                    <Checkbox radio
                              label='Movies only'
                              name='checkboxRadioGroup'
                              value='movie'
                              checked={this.state.type === 'movie'}
                              onChange={this.handleFilter}/>
                    <Checkbox radio
                              label='Series only'
                              name='checkboxRadioGroup'
                              value='series'
                              checked={this.state.type === 'series'}
                              onChange={this.handleFilter}/>
                </div>
            </>

        )
    }


}

export default SearchInput