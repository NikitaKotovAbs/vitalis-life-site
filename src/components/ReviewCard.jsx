const ReviewCard = ({
  text,
  author,
  avatarSrc,
  className = "",
  cardClassName = "",
  textClassName = "",
  authorClassName = ""
}) => {
  return (
    <div className={`bg-white rounded-lg w-[30vw] h-[17vw] p-10 max-w-[23vw] space-y-10 ${cardClassName}`}>
      <p className={`text-lg ${textClassName}`}>
        {text}
      </p>
      <div className={`flex flex-row items-center space-x-5 text-xl font-medium ${authorClassName}`}>
        <img
          src={avatarSrc}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1>{author}</h1>
      </div>
    </div>
  );
};
export default ReviewCard;