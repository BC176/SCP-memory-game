import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from "axios";
import Peanut from '../images/peanut.jpg';
import SCP999 from '../images/scp999.jpg';
import SCP3000 from '../images/scp3000.jpg';
import Shyguy from '../images/shyguy.jpg';
import Sirenhead from '../images/sirenhead.jpg';
import Slenderman from '../images/slenderman.jpg';
import Cardback from '../images/cardback.jpg';

//original 6-card array
const cardArray = [
    {
        type: "Peanut",
        image: Peanut,
        isFlipped: false,
    },
    {
        type: "scp999",
        image: SCP999,
        isFlipped: false,
    },
    {
        type: "scp3000",
        image: SCP3000,
        isFlipped: false,
    },
    {
        type: "Shyguy",
        image: Shyguy,
        isFlipped: false,
    },
    {
        type: "Sirenhead",
        image: Sirenhead,
        isFlipped: false,
    },
    {
        type: "Slenderman",
        image: Slenderman,
        isFlipped: false,
    },
]

var indexTracker;

//concatenate original array to generate pairs based on type
const doubleDecker = cardArray.concat(cardArray);

const MemoryGame = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [clickedCard, setClickedCard] = useState([]);
    const [shuffledDouble, setShuffledDouble] = useState([]);
    const [userInfo, setUserInfo] = useState("");
    const [score, setScore] = useState(0);

    //code sourced from Fisher-Yates shuffle algorithm
    const randomDeck = (arr) => {
        for (var i = arr.length; i > 0; i--) {
            const randomCard = Math.floor(Math.random() * i);
            const currentCard = i - 1;
            const tempCard = arr[currentCard];
            arr[currentCard] = arr[randomCard];
            arr[randomCard] = tempCard;
        }
        return arr;
    }    

    //holds the concatenated original array of 6 in state after shuffle
    //to avoid reshuffling the board when boolean state changes
    useEffect(() => {
        setShuffledDouble(randomDeck(doubleDecker));
    }, [])

    //onClick handler
    const cardClick = (card, index) => {
        if (clickedCard.length < 2) {
            setClickedCard((prev) => [...prev, index]);
            // setClickedCard(clickedCard[0]);
            console.log('line 80- clickedCard should be < 2');
            // console.log(clickedCard[0] + ' line 81, clickedCard[0] should have one card if this runs');
        } else {
            setClickedCard([index]);
            console.log(clickedCard[1] + ' line 84- clickedCard should be = 2');
        }
        const newArr = [...shuffledDouble];
        newArr[index] = {...card, isFlipped : true};
        if (clickedCard.length === 1) {
            indexTracker = index;
            console.log("indexTracker="+indexTracker + ' line 90');
        }
        if (clickedCard.length === 2) {
            console.log("line 93, clickedCard[0]:"+clickedCard[0]+" clickedCard[1]:"+clickedCard[1]+" and clickedCard length === 2");
            if (newArr[indexTracker].type !== newArr[index].type) {
                newArr[indexTracker] = {...card, isFlipped : false};
                newArr[index] = {...card, isFlipped : false};
            }
        }
        // console.log(newArr);
        // console.log(newArr[index]);
        // console.log(card);
        // console.log(indexTracker);
        setShuffledDouble(newArr);
        if (clickedCard.length === 2) {
            const firstMatched = clickedCard[0];
            const secondMatched = clickedCard[1];
            if (firstMatched.type === secondMatched.type) {
                console.log("line 108 These match (although probably not, runs regardless still)");
            } else {
                for(var i = 0; i < shuffledDouble.length; i++) {
                    console.log("line 111 inside else statement")
                    if (shuffledDouble[i] === firstMatched.type) {
                        isFlipped = false;
                    }
                }
                // console.log(shuffledDouble);
                setShuffledDouble(shuffledDouble);
            }
        }
        console.log("clickedCard[0]:"+clickedCard[0] + ' line 120')
        // console.log(newArr);
        // setClickedCard([index]);
        // console.log(clickedCard);
    }

    //Logic for determining if cards pushed to array match or not
    useEffect(() => {
        // console.log(clickedCard);
        if (clickedCard.length === 2) {
            const firstMatched = clickedCard[0];
            const secondMatched = clickedCard[1];
            if (firstMatched.type === secondMatched.type) {
                console.log("line 133 inside useEffect, happening too early, they do not match");
            } else {
                for(var i = 0; i < shuffledDouble.length; i++) {
                    if (shuffledDouble[i] == firstMatched.type) {
                        isFlipped = false;
                    }
                }
                console.log(shuffledDouble);
                setShuffledDouble(shuffledDouble);
            }
        }
        // console.log('line 144');
        // if (clickedCard.length === 2) setTimeout(() => setClickedCard([]), 1000);
    }, [clickedCard]);

    //will use to manage/store score in state
    const scoreManager = () => {

    }  

    return (
        <>
        <div className="mainTop">
        <h5>Match any two Monsters, and you just may summon one. Pray they are not hungry.</h5>
        <Link to="/">Home</Link>
        </div>
        <div className="board">           
        {shuffledDouble
        .map((card, index) => {
            return (
                <div 
                key={index}
                onClick={() => cardClick(card, index)}>
                    <div className="front">
                        <img src={card.isFlipped ? shuffledDouble[index].image : Cardback} height="210" width="190" alt="" />        
                    </div>
                </div>
            );
            })}
        </div>
        </>
    )//end Return
}//end MemoryGame

export default MemoryGame;