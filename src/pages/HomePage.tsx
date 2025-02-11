import React from 'react';
// @ts-ignore
import angeline from '../assets/angeline.jpg';

const HomePage: React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <div style={{flex: '1 0 auto'}}>
                <header style={{backgroundColor: '#ff79c6', color: '#fff', padding: '10px'}}>
                    <h2>Angeline's Wiki Navigation</h2>
                    <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-around'}}>
                        <li><a href="#section1" style={{color: '#fff'}}>Section 1</a></li>
                        <li><a href="#section2" style={{color: '#fff'}}>Section 2</a></li>
                        <li><a href="#section3" style={{color: '#fff'}}>Section 3</a></li>
                    </ul>
                </header>
                <h1>Welcome to Angeline's Wiki</h1>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div id="section1" style={{width: '30%', height: '200px', backgroundColor: '#8be9fd', padding: '20px', margin: '10px'}}>
                        <h2>Section 1</h2>
                        <img src="path_to_image1.jpg" alt="picture of kiwi" />
                        <p>This is some content for section 1.</p>
                    </div>
                    <div id="section2" style={{width: '30%', height: '200px', backgroundColor: '#50fa7b', padding: '20px', margin: '10px'}}>
                        <h2>Section 2</h2>
                        <img src="path_to_image2.jpg" alt="picture of mango" />
                        <p>This is some content for section 2.</p>
                    </div>
                    <div id="section3" style={{
                        width: '30%',
                        height: '200px',
                        backgroundColor: '#ffb86c',
                        padding: '20px',
                        margin: '10px',
                        overflow: "auto"}}>
                        <h2>This is Angeline</h2>
                        <img src={angeline} alt="picture of angeline" style={{float: 'left', marginRight: '10px' ,width: '45%', height: 'auto'}}/>
                        <p>Angeline is a vibrant individual known for her warm personality and genuine compassion. She shares a close bond with her family, often spending quality time with them during gatherings and celebrations. Her circle of friends admires her loyalty and zest for life, making every moment spent with her memorable. Apart from her human companions, Angeline is also a proud pet parent to two adorable pets, Kiwi and Mango, who bring joy and laughter to her home. With her infectious enthusiasm and caring nature, Angeline brightens the lives of those around her, creating lasting connections and cherished memories.</p>
                    </div>
                </div>
            </div>
            <footer style={{flexShrink: 0, backgroundColor: '#ff79c6', color: '#fff', padding: '10px'}}>
                <h2>Wiki Footer</h2>
                <p>© 2024 by Angeline. Proudly created with love.</p>
            </footer>
        </div>
    );
};

export default HomePage;