import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
    const location = useLocation();
    const movie = location.movie;
    console.log(movie);


    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link> 
            <video
            autoPlay
            onProgress
            controls
            src={movie.video}                
            /> 
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/htqXL94Rza4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>           */}
        </div>
    )
}

export default Watch;
