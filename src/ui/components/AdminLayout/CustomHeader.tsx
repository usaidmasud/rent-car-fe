import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
function CustomHeader() {
  return (
    <div className='flex h-14 items-center justify-end bg-secondary-main px-6'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className='h-10 w-10 cursor-pointer rounded-full border-gray-500 hover:border hover:border-primary-main focus:border focus:border-primary-main'>
            <Image
              src={`/assets/images/profile.png`}
              width={40}
              height={40}
              alt='profile'
            />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className='min-w-[220px] rounded-md bg-white p-2  shadow-md outline-none'
            sideOffset={10}
            align='end'
          >
            <DropdownMenu.Item
              onClick={() => alert('hello')}
              className='cursor-pointer rounded-md px-2 py-1 text-sm outline-none transition-colors  duration-300 hover:bg-primary-main hover:text-white'
            >
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={async () =>
                await signOut({
                  redirect: false,
                })
              }
              className='cursor-pointer rounded-md px-2 py-1 text-sm outline-none transition-colors  duration-300 hover:bg-primary-main hover:text-white'
            >
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default CustomHeader;
