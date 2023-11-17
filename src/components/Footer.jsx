import FooterItems from "./FooterItems"
import logo from './../assets/images/logo.png'

function Footer() {
    const menuFooter = [
        {
            id: 1,
            name: 'Product',
        },
        {
            id: 2,
            name: 'Features',
        },
        {
            id: 3,
            name: 'Resources',
        }
    ];

    const menuFooter2 = [
        {
            id: 1,
            name: 'About',
        },

        {
            id: 2,
            name: 'Blog',
        },

        {
            id: 3,
            name: 'Support',
        }
    ]
  return (
    <>
        <div className="flex justify-center gap-9 w-full py-9">
            {menuFooter.map((item) => (
                <FooterItems key={item.id} name={item.name}/>
            ))}
            <img src={logo} alt="" className="w-[70px]"/>
            {menuFooter2.map((item) => (
                <FooterItems key={item.id} name={item.name}/>
            ))}
        </div>
    </>
  )
}
export default Footer