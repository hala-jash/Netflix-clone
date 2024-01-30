
interface MobileMenuProps{
    visible?: boolean
}
const menuItems = [
    'Home',
    'Series',
    'Films',
    'New & Popular',
    'My List',
    'Browse by Languages',
  ];

const MobileMenu:React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible){
      return  null
    }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex ">
        {menuItems.map((item, index) => (
        <div
          key={index}
          className="px-3 text-center text-white hover:underline"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default MobileMenu