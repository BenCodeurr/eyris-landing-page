/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */


function Features(props) {
  return (
    <div className="flex flex-col gap-9 items-center bg-cyan-800 text-white pt-[62px] px-64 pb-10">
    <h3 className="text-xl text-cyan-200 tracking-[5px] mb-5">{props.title}</h3>
    <div className="flex justify-center gap-24">
      <div className="w-2/4">
        <h4 className="text-xl mb-4 font-bold">{props.subtitle}</h4>
        <p className="leading-7 text-[14px] font-extralight mb-4">{props.content}</p>
        <div className="flex gap-2">
          <div className="border rounded-full bg-white w-4 h-4"></div>
          <div className="border rounded-full bg-white w-4 h-4"></div>
          <div className="border rounded-full bg-white w-4 h-4"></div>
        </div>
      </div>
      <div>
        <img className="w-[400px] h-[200px] object-cover" src={props.imgURL} alt="" />
      </div>
    </div>
  </div>
  )
}
export default Features