import React, { Component } from 'react';
import { getmovies } from '../services/fakeMovieService';
import { LikeWhite, LikeDark } from './common/likeComponent';


class MoviesComponent extends Component {
    state = {
        movies: getmovies(),
    }

    handleDelete = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({
            movies
        })
    }
    handleLike = (movie) => {
        const movies = this.state.movies;
        const index = movies.indexOf(movie);
        movies[index].liked ? movies[index].liked = false : movies[index].liked = true;
        this.setState({
            movies
        })
    }
    showTable = () => {
        const { movies } = this.state
        return (
            <div>
                <div className="btn-info p-4"><h3>showing {movies.length} movies in the database</h3></div>


                < table className="table table-hover" >
                    <thead className="border table-primary">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => {
                            return (
                                <tr key={movie._id}>
                                    <td><span>{movie.title}</span></td>
                                    <td><span>{movie.genre.name}</span></td>
                                    <td><span>{movie.numberInStock}</span></td>
                                    <td><span>{movie.dailyRentalRate}</span></td>
                                    <td> <span onClick={() => this.handleLike(movie)}>{movie.liked ? <LikeDark /> : <LikeWhite />}</span></td>
                                    <td><button onClick={() => this.handleDelete(movie._id)} className="btn btn-danger p-2">delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            </div>
        )
    }
    render() {
        const { length } = this.state.movies
        return (
            <div>
                {length ? this.showTable() : <h1 className="btn-primary p-4">you have no movies in the database</h1>}

            </div>
        );
    }
}

export default MoviesComponent;