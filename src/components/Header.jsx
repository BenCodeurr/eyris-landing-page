/* eslint-disable react/jsx-key */

import logo from './../assets/Images/logo.png'
import HeaderItem from './HeaderItems';
function Header() {

    const menu=[
        {
            name:'Home',
        },
        {
            name:'Features',
        },
        {
            name:'Pricing',
        },
        {
            name:'Healthy Tips',
        },

    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name}/>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Header