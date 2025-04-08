import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
  Phone
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return <Command className='bg-secondary bg-white rounded-none border-gray-100 border-2 shadow-md h-screen'>
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandItem>
        <LayoutDashboard className='mr-2 h-4 w-4' />
        <Link href='/'>ข้อมูลสุขภาพของฉัน</Link>
      </CommandItem>
      <CommandItem>
        <Newspaper className='mr-2 h-4 w-4' />
        <Link href='/posts'>กรอกข้อมูลสุขภาพ</Link></CommandItem>
      <CommandItem>
        <Phone className='mr-2 h-4 w-4' />
        <Link href='/Call'>ติดต่อผู้เชียวชาน</Link></CommandItem>
      <CommandSeparator />
    </CommandList>
  </Command>
    ;
};

export default Sidebar;