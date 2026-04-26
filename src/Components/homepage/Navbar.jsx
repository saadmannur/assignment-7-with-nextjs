import NavbarBtn from "./NavbarBtnTroggle";
import NavLinks from "./NavLinks";


const Navbar = () => {

   
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 shadow-sm px-15">
                    <div className="flex-1">
                        <div className="flex justify-baseline items-center gap-2">
                            <NavbarBtn></NavbarBtn>
                            <a className="text-3xl text-green-900 font-semibold"><span className='text-black font-bold'>Keen</span>Keeper</a>
                        </div>
                    </div>
                    <div className="flex-none  hidden md:block">
                        <NavLinks></NavLinks>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;