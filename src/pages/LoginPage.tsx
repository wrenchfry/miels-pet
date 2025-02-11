import React, { useState } from 'react';

const ValentineCard: React.FC = () => {
    const [showGif, setShowGif] = useState(false);  // Controls whether to show the Jinx GIF
    const [showSecondGif, setShowSecondGif] = useState(false);  // Controls whether to show the Love GIF
    const [cardVisible, setCardVisible] = useState(true);  // Controls whether the card is visible
    const [showNoMessage, setShowNoMessage] = useState(false);  // Controls the "Oh no" message visibility
    const [yesButtonSize, setYesButtonSize] = useState(1);  // Controls the size of the Yes button
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });  // Controls No button's position

    const handleYesClick = () => {
        setCardVisible(false);  // Hide the card
        setShowGif(true);  // Show the Jinx GIF
        setYesButtonSize(2);  // Make Yes button grow
        setTimeout(() => {
            setShowGif(false);  // Hide the Jinx GIF after 3 seconds
            setShowSecondGif(true);  // Show the Love GIF
        }, 3000);
    };

    const handleNoClick = () => {
        setShowNoMessage(true);  // Show "Oh no" message
        // Move the "No" button off-screen or shift its position
        setNoButtonPosition({ x: 500, y: 0 });  // Example of moving it to the right
    };

    return (
        <div style={styles.cardContainer}>
            <div style={styles.cardInner}>
                {cardVisible ? (
                    <div style={styles.cardFront}>
                        <h1 style={styles.title}>Hey, merak ediyordum...</h1>
                        <div style={styles.content}>
                            <p style={styles.question}>Benimle sevgililer günü olur musun?</p>
                            <div style={styles.buttonContainer}>
                                <button
                                    style={{ ...styles.yesButton, transform: `scale(${yesButtonSize})` }}
                                    onClick={handleYesClick}
                                >
                                    Evet
                                </button>
                                <button
                                    style={{ ...styles.noButton, left: `${noButtonPosition.x}px`, top: `${noButtonPosition.y}px` }}
                                    onClick={handleNoClick}
                                >
                                    Hayır
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Show GIFs after card is removed
                    <div style={styles.gifContainer}>
                        {showGif && <img src="/jinx-ekko.gif" alt="Jinx Gif" style={styles.gifStyle} />}
                        {showSecondGif && <img src="/love.gif" alt="Love Gif" style={styles.secondGifStyle} />}
                    </div>
                )}
                {showNoMessage && (
                    <div style={styles.noMessage}>
                        <p>Oh no, belki başka zaman!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInner: {
        width: '700px',
        height: '400px',
        position: 'relative',  // Needed to make sure GIFs overlay properly
    },
    cardFront: {
        width: '100%',
        height: '100%',
        backgroundColor: '#B3D9FF',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#F0F8FF',
        fontSize: '3rem',
        marginBottom: '10px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
    },
    question: {
        color: '#F0F8FF',
        fontSize: '1.5rem',
        marginBottom: '20px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        position: 'relative',
    },
    yesButton: {
        backgroundColor: '#A8D1FF',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',  // Smooth scaling transition
    },
    noButton: {
        backgroundColor: '#FFB6C1',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'pointer',
        position: 'absolute',  // Ensures the "No" button moves around
        transition: 'left 0.3s ease, top 0.3s ease',  // Smooth transition for button movement
    },
    gifContainer: {
        display: 'flex',
        justifyContent: 'center',  // Centers horizontally
        alignItems: 'center',  // Centers vertically
        width: '100%',
        height: '100%',
        position: 'absolute',  // Ensure GIFs overlay the card without being transformed
        top: '0',  // Ensure it is aligned at the top of the container
        left: '0',  // Align to the left as well
    },
    gifStyle: {
        maxWidth: '80%',  // Ensure GIF is sized appropriately
        maxHeight: '80%',
        objectFit: 'contain',  // Keep the aspect ratio intact
    },
    secondGifStyle: {
        maxWidth: '80%',  // Ensure the second GIF is sized properly
        maxHeight: '80%',
        objectFit: 'contain',  // Maintain the aspect ratio of the second GIF
    },
    noMessage: {
        marginTop: '20px',
        color: '#FF6347',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
};

export default ValentineCard;
