import React from 'react';
import './ProjectCard.css';
import surf from '../../../images/surf.jpg';
import beer from '../../../images/beer.jpg';
import fika from '../../../images/fika.jpg';
import face from '../../../images/facedetect.jpg';


const ProjectCard = () => {
    return (
        <div className='card'>
            <article className="content mw5 mw8-ns br3 hidden ba b--black-10 mv2 shadow-5">
            <div className='left'>
                <a className='dim' href='https://relaxed-swirles-0bd738.netlify.app/'>Face Detect</a>
                <div className='skills'>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>React.js</p>
                    <p>Tachyons</p>
                </div>
                <p>Summary</p>
                <p className='description'>This project queries Clarifai's face detection algorithm in order to detect faces from images uploaded. First project using <br/> React.js and Tachyons.</p>
            </div>
            <div className='right'>
            <img src={face} alt='' width='270px' height='auto'/>
            </div>
            </article>
            <article className="content mw5 mw8-ns br3 hidden ba b--black-10 mv2 shadow-5">
            <div className='left'>
                <a className='dim' href='https://stefhakan.github.io/Fika/'>Fika</a>
                <div className='skills'>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>   
                </div>
                <p>Summary</p>
                <p className='description'>I made this responsive landing page for as practice in developing a website from a mockup and using Google Map API.</p>
            </div>
            <div className='fika right'>
                <img src={fika}  alt='' />
            </div>
            </article>
            <article className="content mw5 mw8-ns br3 hidden ba b--black-10 mv2 shadow-5">
            <div className='left'>
                <a className='dim' href='https://stefhakan.github.io/beer_generator/'>Beer Generator</a>
                <div className='skills'>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                </div>
                <p>Summary</p>
                <p className='description'>This simple web application uses the API from Punk Ipa to help generate a random beer from their catalog.</p>
            </div>
            <div className='beer right'>
                <img src={beer}  alt='' />
            </div>
            </article>
            <article className="content mw5 mw8-ns br3 hidden ba b--black-10 mv2 shadow-5">
            <div className='left'>
                <a className='dim' href='https://stefhakan.github.io/Surf-Camp/'>Camp S</a>
                <div className='skills'>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                </div>
                <p>Summary</p>
                <p className='description'>A simple mock landing page to for a surfing camp, using the basics of front end development.</p>
            </div>
            <div className='right surf'>
                <img src={surf}  alt='' />
            </div>
            </article>
        </div>
    )
}

export default ProjectCard;