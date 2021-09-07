import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Peanut from '../images/peanut.jpg';
import SCP999 from '../images/scp999.jpg';
import SCP3000 from '../images/scp3000.jpg';
import Shyguy from '../images/shyguy.jpg';
import Sirenhead from '../images/sirenhead.jpg';
import Slenderman from '../images/slenderman.jpg';
import Cardback from '../images/cardback.jpg';

const MemoryGame = () => {
    const cardArray = [
        {
            type: "Peanut",
            image: Peanut,
            // isFlipped: true,
        },
        {
            type: "scp999",
            image: SCP999,
            // isFlipped: true,
        },
        {
            type: "scp3000",
            image: SCP3000,
            // isFlipped: true,
        },
        {
            type: "Shyguy",
            image: Shyguy,
            // isFlipped: true,
        },
        {
            type: "Sirenhead",
            image: Sirenhead,
            // isFlipped: true,
        },
        {
            type: "Slenderman",
            image: Slenderman,
            // isFlipped: true,
        },
    ]

    //code sourced from Fisher-Yates shuffle algorithm after 
    //too many hours reading on Stack and other web pages
    // const randomDeck = (arr) => {
    //     for (var i = arr.length; i > 0; i--) {
    //         const randomCard = Math.floor(Math.random() * i);
    //         const currentCard = i - 1;
    //         const tempCard = arr[currentCard];
    //         arr[currentCard] = arr[randomCard];
    //         arr[randomCard] = tempCard;
    //     }
    //     return arr;
    // }

    // class Card extends React.Component {
    //     render() {
    //       let content;
    //       if(this.props.faceUp) {
    //         content = this.props.content;
    //       } else {
    //         content = ''
    //       }
    //       return (
    //         <div onClick={this.props.cardClick} className={`Card ${this.props.faceUp ? 'face-up': ''}`}>
    //           {content}
    //         </div>
    //       )
    //     }
    //   }

    //   class Board extends React.Component {
    //     constructor(props) {
    //       super(props)
    //       const fronts = [
    //         {
    //             type: "Peanut",
    //             image: Peanut,
    //         },
    //         {
    //             type: "scp999",
    //             image: SCP999,
    //         },
    //         {
    //             type: "scp3000",
    //             image: SCP3000,
    //         },
    //         {
    //             type: "Shyguy",
    //             image: Shyguy,
    //         },
    //         {
    //             type: "Sirenhead",
    //             image: Sirenhead,
    //         },
    //         {
    //             type: "Slenderman",
    //             image: Slenderman,
    //         },
    //       ]
    //       const deck = fronts
    //         .concat(fronts)
    //         .sort(() => Math.random() - 0.5)
    //         .map(f => {
    //           return {
    //             content: f,
    //             faceUp: false,
    //           }
    //         })
    //       this.state = {
    //         deck: deck,
    //         firstCard: null,
    //       }
    //     }
      
    //     flipCardTo(cardIdx, faceUp) {
    //       this.setState({
    //         deck: this.state.deck.map((f, i) => {
    //           if(i === cardIdx) {
    //             return {
    //               content: f.content,
    //               faceUp: !f.faceUp,
    //             }
    //           } else {
    //             return f;
    //           }
    //         })
    //       })
    //     }
      
    //     cardClick(cardIdx) {
    //       if(this.state.firstCard === null) {
    //         this.setState({firstCard: cardIdx});
    //       } else {
    //         const firstCardContent = this.state.deck[this.state.firstCard].content;
    //         const secondCardContent = this.state.deck[cardIdx].content;
    //         if(firstCardContent === secondCardContent) {
    //           this.setState({firstCard: null});
    //         } else {
    //           setTimeout(() => {
    //             this.flipCardTo(this.state.firstCard, false)
    //             this.flipCardTo(cardIdx, false)
    //             this.setState({firstCard: null});
    //           }, 3000)
    //         }
    //       }
      
    //       this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
    //     }
      
    //     render () {
    //       console.log(this.state.firstCard);
    //       return (
    //         this.state.deck.map((f, i) => {
    //           return (<div className="Board">
    //             <Card
    //               cardClick={() => {this.cardClick(i)}}
    //               content={f.content}
    //               faceUp={f.faceUp} />
    //           </div>)
    //         })
    //       )
    //     }
    //   }

    const [clickedCard, setClickedCard] = useState([]);
    const [cardMatch, setCardMatch] = useState([]);
    const [score, setScore] = useState(0);

    const doubleDecker = cardArray.concat(cardArray);
    // console.log(doubleDecker);


const cardClick = (scp, index) => {
    // let isFlipped = false;
    console.log("clicked");
    // scp[index].isFlipped = !scp[index].isFlipped;
    // setClickedCard((clickedCard) => [...clickedCard, {scp, index}]);
    // console.log(clickedCard);
    // // doubleDecker[index].isFlipped = !doubleDecker[index].isFlipped;
    // doubleDecker[index].isFlipped = true;
    // console.log(doubleDecker[index].isFlipped);
    // if (doubleDecker[index]) {
    //     doubleDecker.image.type;
    // }
}    

    const scoreManager = () => {

    }

    // useEffect(() => {
    //     // if (clickedCard.length < 2) return;

    //     const firstMatched = doubleDecker[clickedCard[0]];
    //     const secondMatched = doubleDecker[clickedCard[1]];

    //     if (secondMatched && firstMatched.type === secondMatched.type) {
    //         setCardMatch([...cardMatch, firstMatched.type]);
    //     }

        // if (clickedCard.length === 2) setTimeout(() => setClickedCard([]), 1000);

    // }, [clickedCard]);

    return (
        <>
        <div className="mainTop">
        <h5>Match any two SCP's, and you just may summon them. Pray they are not hungry.</h5>
        <Link to="/">Home</Link>
        </div>
        <div className="board">           
            {doubleDecker.map((scp, index) => {
            return (
                <div 
                key={index}
                onClick={() => cardClick(scp, index)}>
                    <div key={index} className="front">
                        {/* <img src={!scp.isFlipped ? {Cardback} : doubleDecker.image} alt="" height="210" width="190" /> */}
                        <img src={doubleDecker.image} height="210" width="190" alt="" />
                    </div>
                </div>
            );
            })}
        </div>
        </>
    )//end Return
}//end MemoryGame

export default MemoryGame;