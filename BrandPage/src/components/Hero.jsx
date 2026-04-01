const HeroSection =()=>{
    return(
        <main className = "hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES. YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                    SHOES.  
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="Flipkart" />
                        <img src="/images/amazon.png" alt="Amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Nike" />
            </div>
        </main>
    );
}

export default HeroSection;