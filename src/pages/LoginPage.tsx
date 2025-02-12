import React, { useState } from 'react';

const ValentineCard: React.FC = () => {
    const [showGif, setShowGif] = useState(false);  // Controls whether to show the Jinx GIF
    const [showSecondGif, setShowSecondGif] = useState(false);  // Controls whether to show the Love GIF
    const [cardVisible, setCardVisible] = useState(true);  // Controls whether the card is visible
    const [noMessage, setNoMessage] = useState("");  // Message when "No" is clicked
    const [noButtonClicked, setNoButtonClicked] = useState(false);  // Controls if the "No" button has been clicked
    const [yesButtonStyle, setYesButtonStyle] = useState({
        fontSize: 20,
    });
    const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({
        fontSize: 20,
    });

    const messages = [
        "Aşk, beni reddettiğini duyarsa çok üzülür. :(",
        "Ağlamayı bırakırım, ama sadece evet dersen ve havuçlu kekimi seninle paylaşırım.",
        "Eğer evet dersen, dünyanın en iyi partneri olacağıma söz veriyorum. Muhtemelen.",
        "İyice düşün... hayır demek beklenmedik duygusal sonuçlara yol açabilir. Söylemiş olayım.",
        "Eğer evet dersen, bir tartışmada kazanmanı sağlarım. Bir kez olsun.",
        "Ah, hadi ama! Evren bile benim tarafımda!",
        "Kalbim çok hassas, bunu bana yapma...",
        "Evet de, senin en sevdiğin hobiyi öğrenmeyi düşünürüm. Başarılı olacağıma söz veremem.",
        "Senin yüzünden köpeğim bile ağlıyor...",
        "Hayır cevabını kabul etmiyorum. Üzgünüm ama üzgün değilim."
    ];

    const handleYesClick = () => {
        setCardVisible(false);  // Hide the card
        setShowGif(true);  // Show the Jinx GIF
        setTimeout(() => {
            setShowGif(false);  // Hide the Jinx GIF after 3 seconds
            setShowSecondGif(true);  // Show the Love GIF
        }, 3000);
        setNoMessage("");  // Clear the "No" message when "Yes" is clicked

        // Slight increase in the "Yes" button size
        setYesButtonStyle(prev => ({
            fontSize: prev.fontSize + 3,  // Increase by a smaller amount
        }));
    };

    const [messageIndex, setMessageIndex] = useState(0);
    const handleNoClick = () => {
        setNoButtonStyle({
            position: 'absolute',
            top: `${Math.random() * 200}px`,
            left: `${Math.random() * 350}px`,
        });

        setNoMessage(messages[messageIndex]); // Show next message
        setMessageIndex((prev) => (prev + 1) % messages.length); // Loop through messages

        setYesButtonStyle((prev) => ({
            fontSize: prev.fontSize + 20, // Yes button grows by a smaller amount
        }));

        setNoButtonClicked(true); // Mark "No" button as clicked
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
                        {showGif && <img src="/jinx-ekko.gif" alt="Jinx Gif" style={styles.gifStyle} />}
                        {showSecondGif && <img src="/love.gif" alt="Love Gif" style={styles.secondGifStyle} />}
                    </div>
                )}

                {/* Display the No message only after the "No" button is clicked */}
                {noButtonClicked && noMessage && (
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
        position: 'relative',
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
        alignItems: 'center',
        width: '50%',
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
