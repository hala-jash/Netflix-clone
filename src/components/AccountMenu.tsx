import { signOut } from 'next-auth/react';
import { getRandomImage } from '@/utils/randomImg';
import { useSession } from 'next-auth/react';
const randomImage = getRandomImage()
interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
  if (!visible) {
    return null;
  }
  const { data: session } = useSession()

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-4'>
        <div className='px-4 gap-3 group/item flex flex-row items-center w-full'>
          <img className="w-8 rounded-md" src={randomImage} alt="" />
          <p className="text-white text-sm group-hover/item:underline">
            {session?.user.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4"/>
        <div onClick={()=> signOut()}className="px-3 text-center text-white text-sm hover:underline">
          Sign out?
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
