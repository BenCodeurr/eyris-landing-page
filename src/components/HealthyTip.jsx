

export default function HealthyTip({imgUrl, title}) {
  return (
    <div className="w-[300px]">
        <img className="mb-4" src={imgUrl} alt="" />
        <h4 className="mb-7 text-black font-normal">{title}</h4>
        <a className="object-cover underline decoration-0 underline-offset-4 font-normal text-[12px]" href="#">See More</a>
    </div>
  )
}