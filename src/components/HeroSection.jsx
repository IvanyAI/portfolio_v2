import TiltedCard from "./TiltedCard/TiltedCard";
import Stack from "./Stack/Stack";
import SplitText from "./SplitText/SplitText";
import TextPressure from "./TextPressure/TextPressure";

export const HeroSection = () => {
  const images = [
    {
      id: 1,
      img: "/assets/images/2.jpg",
    },
    {
      id: 2,
      img: "/assets/images/10.jpg",
    },
    {
      id: 3,
      img: "/assets/images/5.jpg",
    },
    {
      id: 4,
      img: "/assets/images/12.jpg",
    },
  ];
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="container min-h-screen grid grid-cols-12 py-7 px-25">
      <div className="col-span-6">
        <SplitText
          text="Hello, Universe!"
          className="text-6xl font-extrabold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div style={{ position: "relative", height: "100px" }}>
          <TextPressure
            text="Vanneca's here!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <p className="text-lg text-gray-400 mb-5">
          "Someone who is happy to know something, and he is happy because of
          it. Amor Fati—it means I love my destiny. No matter what happens, I
          will find my happiness. Not because life is always kind, not because
          the road is always smooth, but because I choose to embrace everything
          as part of my journey.
        </p>
        <div className="flex items-center justify-center gap-5">
          <div>
            <h2 className="font-extrabold text-8xl italic">100k</h2>
            <p className=" text-gray-600">"100K Stories, One Soul" </p>
          </div>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 180, height: 180 }}
            cardsData={images}
          />
          <a
            className="relative px-6 py-2 ml-5 text-white font-semibold rounded-full border border-gray-600 bg-black transition-all duration-300 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rounded-full before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-100"
            href="#Achievments"
          >
            more?
          </a>
        </div>
      </div>
      <div className="col-span-6 py-5 px-55">
        <TiltedCard
          imageSrc="assets/images/vanneca.png"
          altText="Vanneca's"
          captionText="it's me."
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="500px"
          imageWidth="500px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text">Vanneca's</p>}
        />
      </div>
    </div>
  );
};
