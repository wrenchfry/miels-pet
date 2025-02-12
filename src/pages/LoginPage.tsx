import React, { useState } from 'react';

const ValentineCard: React.FC = () => {
    const [showGif, setShowGif] = useState(false);  // Controls whether to show the Jinx GIF
    const [showSecondGif, setShowSecondGif] = useState(false);  // Controls whether to show the Love GIF
    const [cardVisible, setCardVisible] = useState(true);  // Controls whether the card is visible
    const [noMessage, setNoMessage] = useState("Oh no, belki başka zaman!");  // Message when "No" is clicked
    const [noButtonClicked, setNoButtonClicked] = useState(false);  // Controls if the "No" button has been clicked
    const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({
        fontSize: 20,
        position: 'absolute',  // Fixed initial position
        top: '60%',  // Fixed position from top
        left: '30%',  // Fixed position from left
    });
    const [yesButtonStyle, setYesButtonStyle] = useState({
        fontSize: 20,
    });

    const messages = [
        "Biliyorsun, eğer evet dersen havuçlu kekimi paylaşırım… 😉",
        "Reddedildim mi? Tamam, ama evet dersen havuçlu kekin son parçasını sana veririm.",
        "Kalp kırıklığını havuçlu kekle düzeltebiliriz… ama onunla paylaşabilmem için evet demen gerek!",
        "Beni bu havuçlu kekle yalnız bırakma… evet de, paylaşalım!",
        "Tamam, reddedildim… ama havuçlu kekim harika, evet dersen seninle paylaşırım.",
        "Ağlamayı bırakırım, ama sadece evet dersen ve havuçlu kekimi seninle paylaşırım.",
        "Tamam, reddedildim… ama havuçlu kekim hâlâ masada, seni bekliyor!",
        "Biliyorum, biliyorum… ama hayal et: havuçlu kek, Netflix ve senin ‘evet’ demen?",
        "Henüz bitmedi… sen evet dersen, havuçlu kekimi paylaşırım!",
        "Tamam, ama başka kimse havuçlu kekimi almaz, evet de… Sadece söylüyorum.",
        "Ah, hayır… Ask çok üzülür, ona acı verir! Hayır demek kolay mı?"
    ];

    const handleYesClick = () => {
        setCardVisible(false);  // Hide the card
        setShowGif(true);  // Show the Jinx GIF
        setTimeout(() => {
            setShowGif(false);  // Hide the Jinx GIF after 3 seconds
            setShowSecondGif(true);  // Show the Love GIF
        }, 3000);
        setNoMessage("");  // Clear the "No" message when "Yes" is clicked

        // Immediately increase the "Yes" button size when clicked
        setYesButtonStyle(prev => ({
            fontSize: prev.fontSize * 2,  // Double the font size immediately
        }));
    };

    const handleNoClick = () => {
        // Reset state if button was already clicked
        if (noButtonClicked) {
            setNoButtonStyle({
                fontSize: 20,
                position: 'absolute', // Reset position
                top: '60%',
                left: '30%',
            });
            setNoButtonClicked(false);  // Reset clicked state
        } else {
            // Only change button styles the first time "No" is clicked
            setNoButtonStyle(prev => {
                const fontSize = typeof prev.fontSize === 'number' ? prev.fontSize : 20;
                return {
                    fontSize: fontSize + 5,  // Increase font size
                    position: 'absolute',
                    top: `${Math.random() * 200}px`,  // Random vertical position
                    left: `${Math.random() * 350}px`,  // Random horizontal position
                };
            });

            // Update Yes button size immediately
            setYesButtonStyle(prev => ({
                fontSize: prev.fontSize * 2,  // Double the font size
            }));

            // Set "No" message and trigger style updates
            setNoButtonClicked(true);
            setNoMessage(messages[Math.floor(Math.random() * messages.length)]);
        }
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
                                    style={{ ...styles.yesButton, ...yesButtonStyle }}
                                    onClick={handleYesClick}
                                >
                                    Evet
                                </button>
                                <button
                                    style={{ ...styles.noButton, ...noButtonStyle }}
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
                        {showGif && <img src="/jinx-ekko.gif" alt="Jinx Gif" style={styles.gifStyle}/>}
                        {showSecondGif && <img src="/love.gif" alt="Love Gif" style={styles.secondGifStyle} />}
                    </div>
                )}
                {noButtonClicked && (
                    <div style={styles.noMessageContainer}>
                        <p style={styles.noMessage}>{noMessage}</p>
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
        justifyContent: 'center',  // Center the buttons within the container
        width: '50%',
        position: 'relative',  // Needed for absolute positioning of "No" button
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
        // Position "No" button absolutely relative to "Yes"
        left: '-120px',  // Move it to the left of the "Yes" button
    },
    gifContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
    },
    gifStyle: {
        maxWidth: '80%',
        maxHeight: '80%',
        objectFit: 'contain',
    },
    secondGifStyle: {
        maxWidth: '80%',
        maxHeight: '80%',
        objectFit: 'contain',
    },
    noMessageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    noMessage: {
        fontSize: '1.5rem',
        color: '#FFB6C1',
        fontWeight: 'bold',
    }
};

export default ValentineCard;
