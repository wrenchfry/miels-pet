import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ValentineCard: React.FC = () => {
    const [showGif, setShowGif] = useState(false);  // Controls whether to show the Jinx GIF
    const [showSecondGif, setShowSecondGif] = useState(false);  // Controls whether to show the Love GIF
    const [cardVisible, setCardVisible] = useState(true);  // Controls whether the card is visible
    const [showJinxGif, setShowJinxGif] = useState(true);  // Controls whether the Jinx GIF is visible

    const handleYesClick = () => {
        setCardVisible(false);  // Hide the card
        setShowGif(true);  // Show the Jinx GIF
        setTimeout(() => {
            setShowJinxGif(false);  // Hide the Jinx GIF
            setShowSecondGif(true);  // Show the Love GIF after 3 seconds
        }, 3000);
    };

    return (
        <motion.div
            style={styles.cardContainer as React.CSSProperties}
            animate={{ rotateY: cardVisible ? 0 : 180 }}  // Card flip animation
            transition={{ duration: 1 }}
        >
            <div style={styles.cardInner}>
                {cardVisible ? (
                    <div style={styles.cardFront}>
                        <h1 style={styles.title}>Hey, merak ediyordum...</h1>
                        <div style={styles.content}>
                            <p style={styles.question}>Benimle sevgililer günü olur musun?</p>
                            <div style={styles.buttonContainer}>
                                <button
                                    style={styles.yesButton}
                                    onClick={handleYesClick}
                                >
                                    Evet
                                </button>
                                <button
                                    style={styles.noButton}
                                    onClick={() => alert("Oh no, maybe next time!")}
                                >
                                    Hayır
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Show Jinx GIF after card is removed
                    <div style={styles.gifContainer}>
                        {showJinxGif && <img src="/jinx.gif" alt="Jinx Gif" style={styles.gifStyle} />}
                        {showSecondGif && <img src="/love.gif" alt="Love Gif" style={styles.gifStyle} />}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
        perspective: '1000px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInner: {
        width: '700px',
        height: '400px',
        transformStyle: 'preserve-3d',
        transition: 'transform 1s',
    },
    cardFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#B3D9FF',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
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
    },
    yesButton: {
        backgroundColor: '#A8D1FF',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'pointer',
    },
    noButton: {
        backgroundColor: '#FFB6C1',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
        fontSize: '1.2rem',
        cursor: 'pointer',
    },
    gifContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    gifStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures the GIF covers the entire container
    },
};

export default ValentineCard;
