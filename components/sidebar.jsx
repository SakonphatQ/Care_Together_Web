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
  User
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return <Command className='bg-secondary rounded-none'>
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>

      <CommandItem>
        <LayoutDashboard className='mr-2 h-4 w-4' />
        <Link href='/'>Dashboard</Link>
      </CommandItem>
      <CommandItem>
        <Newspaper className='mr-2 h-4 w-4' />
        <Link href='/posts'>Posts</Link></CommandItem>
      <CommandItem>
        <Folders className='mr-2 h-4 w-4' />
        <Link href='/#'>Calculator</Link></CommandItem>

      <CommandSeparator />
    </CommandList>
  </Command>
    ;
};

export default Sidebar;