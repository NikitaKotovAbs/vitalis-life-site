import useDeviceDetection from "../hooks/useDeviceDetection.js";


const ReviewCard = ({
                        reviews,
                        text,
                        author,
                        avatarSrc,
                        className = "",
                        cardClassName = "",
                        textClassName = "",
                        authorClassName = ""
                    }) => {
    const displayReviews = reviews || (text && author && avatarSrc ? [{text, author, avatarSrc}] : []);
    const {isMobile, isLaptop, isTablet} = useDeviceDetection();
    return (
        <>
            {isMobile ? (
                <>
                    {
                        displayReviews.map((review, index) => (
                            <div key={index} className={`border  rounded-lg max-w-80 p-10  space-y-7 ${cardClassName}`}>
                                <p className={`ph:text-xs ${textClassName}`}>
                                    {review.text}
                                </p>
                                <div className={`flex flex-row items-center space-x-5 text-xl font-medium ${authorClassName}`}>
                                    <img
                                        src={review.avatarSrc}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <h1>{review.author}</h1>
                                </div>
                            </div>
                        ))
                    }
                </>
            ) : isTablet ? (
                <>
                    {
                        displayReviews.map((review, index) => (
                            <div key={index} className={`border  rounded-lg max-w-80 p-10  space-y-7 ${cardClassName}`}>
                                <p className={`ph:text-xs ${textClassName}`}>
                                    {review.text}
                                </p>
                                <div className={`flex flex-row items-center space-x-5 text-xl font-medium ${authorClassName}`}>
                                    <img
                                        src={review.avatarSrc}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <h1>{review.author}</h1>
                                </div>
                            </div>
                        ))
                    }
                </>
            ) : (
                <>
                    {
                        displayReviews.map((review, index) => (
                            <div key={index} className={`border  rounded-lg max-w-96 p-10  space-y-7 ${cardClassName}`}>
                                <p className={`ph:text-xs ${textClassName}`}>
                                    {review.text}
                                </p>
                                <div className={`flex flex-row items-center space-x-5 text-xl font-medium ${authorClassName}`}>
                                    <img
                                        src={review.avatarSrc}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <h1>{review.author}</h1>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}


        </>

    );
};
export default ReviewCard;