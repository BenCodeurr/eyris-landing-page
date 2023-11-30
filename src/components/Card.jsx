
export default function Card(props) {
    const {imgURL, title, content} = props;
  return (
    <div className="bg-zinc-100 text-black p-8">
        <img className="w-[30px] h-[30px] mb-5" src={imgURL} alt="" />
        <h3 className="font-semibold mb-4">{title}</h3>
        <p className="text-sm">{content}</p>
    </div>
  )
}