/* eslint-disable react/prop-types */


function Features(props) {
  const { title, subtitle, content, imgURL, isSecond, isThird } = props;

  const containerClasses = `flex flex-col gap-9 items-center ${
    isSecond
      ? 'bg-zinc-100 text-black'
      : isThird
      ? 'bg-white text-black'
      : 'bg-cyan-800 text-white'
  } pt-[62px] px-64 pb-10`;

  const textContainerClasses = isSecond ? 'flex justify-start gap-24' : 'flex justify-center gap-24';

  const roundedFullClasses = isSecond || isThird ? 'border rounded-full bg-black w-4 h-4' : 'border rounded-full bg-white w-4 h-4';

  const imageClasses = `w-[400px] h-[200px] object-cover ${isThird ? 'ml-auto' : isSecond ? 'mr-auto transform scale-x[-1]' : ''}`;

  return (
    <div className={containerClasses}>
      <h3 className="text-xl text-cyan-200 tracking-[5px] mb-5">{title}</h3>
      <div className={textContainerClasses}>
        <div>
          <img className={imageClasses} src={imgURL} alt="" />
        </div>
        <div className="w-2/4">
          <h4 className="text-xl mb-4 font-bold">{subtitle}</h4>
          <p className="leading-7 text-[14px] font-extralight mb-4">{content}</p>
          <div className="flex gap-2">
            <div className={roundedFullClasses}></div>
            <div className={roundedFullClasses}></div>
            <div className={roundedFullClasses}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
