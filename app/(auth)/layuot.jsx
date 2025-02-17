import ThemeToggler from "@/components/ui/ThemeToggler";


const AuthLayout = ({ children }) => {
    return (
    <div className="h-[100vh] flex justify-center items-center relative">
        <div className="absolute bottom-5 right-0 text-white">
            <ThemeToggler />
        </div>
        {children}
    </div>
    );
}

export default AuthLayout;