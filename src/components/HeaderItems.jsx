/* eslint-disable react/prop-types */

function HeaderItem({name}) {
    return (
      <div className='text-black font-roboto font-normal flex items-center gap-3
      text-[15px] cursor-pointer mb-2'>
          <h2 className=''>{name}</h2>
      </div>
    )
  }
  
  export default HeaderItem