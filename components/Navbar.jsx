import Image from 'next/image';
import Link from 'next/link';
import logo from '../Img/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'


const Navbar = () => {
    return <div className="bg-primary bg-white text-black py-2 px-5 flex justify-between border-b-2">

        <Link href='/'>
            <div className='flex items-center text-blue-800 font-semibold text-xl'><Image src={logo} alt='TraversyPress' width={50} />ดูแลกัน - Care Together</div>
        </Link>


        <div className='flex space-x-5 items-center font-semibold'>
            <Link href='/about'>
                <div className='text-black'>เกี่ยวกับเรา</div>
            </Link>
            <Link href='/services'>
                <div className='text-black'>บริการของเรา</div>
            </Link>
            <Link href='/HowTO'>
                <div className='text-black'>วิธีใช้งาน</div>
            </Link>
            <Link href='/contact'>
                <div className='text-black'>ติดต่อเรา</div>
            </Link>
        </div>
        <div className='flex items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                    <Avatar>
                        <AvatarImage src='https://github.com/shacn.png' alt='@shadcn' />
                        <avatarFallback className='text-black'>BT</avatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href='/profile'>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/auth'>Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>

    </div>;
};

export default Navbar;