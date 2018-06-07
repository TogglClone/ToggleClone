import React, { Component } from "react"
import styled,{keyframes} from "styled-components"
import annika from "./img/annika.jpg"
import brad from "./img/brad.jpg"
import tasha from "./img/tasha.jpg"
import background from "./img/bg.png"
export default class Reviews extends Component {
    constructor(){
        super();
        this.state = {
            tasha:[tasha,`"We're using Toggl to analyze the profitability of the projects we do for our clients, and for tracking our internal ROI. But sometimes we also show the data to our clients - that makes negotiations a lot easier!"`],
            brad:[brad,`"Using Toggl is helping us get a handle on our time allocation for different customers and projects. Before we had no idea of what people were spending their work time on - I had to check in on that all the time. Now I can just focus on the important things, instead of micromanaging."`],
            annika:[annika,`"It's always hard to predict how much time a project is going to take. Having stats on how much time different things have taken in the past is great for getting accurate predictions for the future."`],
            currentReviewie:[tasha,"We're using Toggl to analyze the profitability of the projects we do for our clients, and for tracking our internal ROI. But sometimes we also show the data to our clients - that makes negotiations a lot easier!"],
            wiggle: null,
            buttonBackgroundTasha:false,
            buttonBackgroundBrad:true,
            buttonBackgroundAnnika:true
        }
    }
    reset() {
        this.setState({
            wiggle: null
        })
    }
    handleButtonOne(){
        this.setState({
            buttonBackgroundTasha:false,
            buttonBackgroundBrad:true,
            buttonBackgroundAnnika:true
        })
    }
    handleButtonTwo(){
        this.setState({
            buttonBackgroundBrad:false,
            buttonBackgroundAnnika:true,
            buttonBackgroundTasha:true
        })
    }
    handleButtonThree(){
        this.setState({
            buttonBackgroundAnnika:false,
            buttonBackgroundBrad:true,
            buttonBackgroundTasha:true
        })
    }
    wiggle(){
        this.setState({
            wiggle: dash
           
        })
        setTimeout(_ => {
            this.reset()
        }, 2000)
    }


    updateReviewie(reviewie){
        this.setState({currentReviewie:reviewie})
    }
    render() {
         const {tasha,brad,annika,wiggle}=this.state
        return(
        <ReviewsContainer>
                <ReviewTitle> Sweet Nothings </ReviewTitle>
                <ReviewMini> Some client love. </ReviewMini>
                <ReviewText>{this.state.currentReviewie[1]}</ReviewText>
            <AvatarContainer>
                <ImageWormBody>
                    <Worm><Crypto wiggle={wiggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 69.6"><path d="M23.5 68.1V63a5.6 5.6 0 0 1 5.6-5.6h1a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6h-13a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h21.5a5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.6H7.1a5.6 5.6 0 0 1-5.6-5.6 5.6 5.6 0 0 1 5.6-5.6h10.8A5.6 5.6 0 0 0 23.5 7V1.8" fill="none" stroke="#ffacba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" ></path></Crypto></Worm>
                    <ImageContainer > 
                        <Image src={this.state.currentReviewie[0]}alt="current"/>
                        <Tasha onClick={()=>{this.wiggle(),this.updateReviewie(tasha)}} image={tasha[0]} ></Tasha>
                        <Brad onClick={()=>{this.wiggle(),this.updateReviewie(brad)}} image={brad[0]}></Brad>
                        <Annika onClick={()=>{this.wiggle(),this.updateReviewie(annika)}} image={annika[0]}></Annika>
                    </ImageContainer>
                </ImageWormBody>
        
             <ButtonBody>
                    {this.state.buttonBackgroundTasha ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonOne()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonOne()}}></ButtonRed>}
                    {this.state.buttonBackgroundBrad ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(brad),this.handleButtonTwo()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonTwo()}}></ButtonRed>}
                    {this.state.buttonBackgroundAnnika ? 
                        <ButtonWhite onClick={()=>{this.wiggle(),this.updateReviewie(annika),this.handleButtonThree()}}></ButtonWhite>:
                        <ButtonRed onClick={()=>{this.wiggle(),this.updateReviewie(tasha),this.handleButtonThree()}}></ButtonRed>}
                </ButtonBody>
            </AvatarContainer>
        </ReviewsContainer>

        )
    }
}
//Things to do for Reviews- Make text body and image/animation body responsive, Worm animates on click and after reviewie changes, all elements fade in and 
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const dash = keyframes `
        from {
          stroke-dashoffset: -800;
        }
        
       to {
          stroke-dashoffset: 0;
      }
    `
const Crypto =styled.svg `
    fill: white;
    stroke: black;
    stroke-dasharray: 800;
    animation: ${props=>props.wiggle};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    // animation-iteration-count: infinite;
    height:4.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
  }
  
`
const ReviewsContainer = styled.div`
    height: 43rem;
    width: 100% -4rem;
    background-color:#FEEEDE;
    background-image: url(${background});
    background-repeat: repeat;
    padding: 3rem 2rem 0 2rem;
    position: relative;
    @media(min-width:1240px){
        padding-bottom:15rem;
        padding-top:8.5rem;
        padding-left:280px;
        padding-right:280px
    }
    @media(min-width:768px){
        padding-top:5.5rem;
        padding-left:80px;
        padding-right:80px;
        
    }
    @media(min-width:1024px){
        padding-left:200px;
        padding-right:200px;
        
    }
`
const ReviewTitle = styled.h1`
    font-size: 1.75rem; 
    line-height: 2rem;
    @media(min-width:1240px){
        font-size:3.4rem;
        line-height:1.03;
        font-weight:900;
        margin-bottom:.5rem;
        margin-top:6rem
    }
`
const ReviewMini = styled.h2`
    font-size: .75rem;
    margin-bottom: 1.5em;
    margin-top:0;
    line-height:1.71;
    letter-spacing:-.02em;
    @media(min-width:768px){
        font-size: .85rem;
    }
    @media(min-width:1240px){
        font-size:1.2rem;
        line-height:2rem;
        margin-bottom:5.5rem;
        font-weight:100;
    }
`
const ReviewText = styled.h3`
    font-size: 1.1rem;
    font-weight:100;
    line-height: 1.7rem;
    padding-left:.8rem;
    padding-right:.8rem;
    position:relative;
    display:block;
    @media(min-width:1240px){
        font-size:1.8rem;
        line-height:1.5;
        font-weight:100; 
    }
    @media(min-width:768px){
        line-height:2.3rem;
    }
    @media(min-width:1240px){
        width:62%;
        margin:auto
    }
`
const AvatarContainer = styled.section `
    margin-top:1px

`
const ImageWormBody = styled.section`
    padding-top:1.5rem;
    position:relative;
`
const Worm = styled.section`
    height:4.7rem;
    margin-left:auto;
    margin-right:auto;
    width:3.3rem;
`
const ImageContainer = styled.section`
    margin-top:2rem;
    flex:wrap
`
const Image = styled.img`
    height:65px;
    width:65px;
    border-radius:50%;
    cursor:pointer;
    @media(min-width: 768px){
        display:none
    }
`
const Tasha = styled.button`
    height:65px;
    width:65px;
    border-radius:50%;
    cursor:pointer;
    margin-left:50px;
    margin-right:50px;
    background-image:url(${props=>props.image});
    background-size:contain;
    outline:none;
    border:none;
    display:none
    @media(min-width: 768px){
        display:inline
    }
`
const Brad  = styled.button`
    height:65px;
    width:65px;
    border-radius:50%;
    cursor:pointer;
    margin-left:50px;
    margin-right:50px;
    background-image:url(${props=>props.image});
    background-size:contain
    outline:none;
    border:none
    display:none
    @media(min-width: 768px){
        display:inline;
    
    }
`
const Annika  = styled.button`
    height:65px;
    width:65px;
    border-radius:50%;
    cursor:pointer;
    margin-left:50px;
    margin-right:50px;
    background-image:url(${props=>props.image});
    background-size:contain;
    outline:none;
    border:none;
    display:none
    @media(min-width: 768px){
        display:inline
    }
`
const ButtonBody = styled.section`
    width:100%;
    height:80px;
    margin:auto;
    padding-top:80px;
    @media(min-width: 768px){
        display:none
    }
`
const ButtonWhite = styled.button`
    border-radius:50%;
    height: 20px;
    width: 18px;
    cursor: pointer;
    background-color:white;
    margin-left:2px;
    margin-right:2px
`
const ButtonRed = styled.button`
    border-radius:50%;
    height: 20px;
    width: 18px;
    cursor: pointer;
    background-color:red;
    margin-left:2px;
    margin-right:2px
`

