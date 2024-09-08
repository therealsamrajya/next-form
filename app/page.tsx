import RegistrationForm from "@/components/RegistrationForm";
import ModeToggle from '@/components/theme-switcher'

export default function Home() {
  return (
    <div>
   
     <header className="absolute top-4 left-4">
        <img src="/logo.png" alt="Logo" className="w-18 h-20" />
       
      </header>
      <div className="absolute top-4 right-4"> <ModeToggle/></div>
     
   
    <RegistrationForm/>
   </div>
  );
}
