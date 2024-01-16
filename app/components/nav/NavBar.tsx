import  Container  from "../Container";

const NavBar = ()=> {
   return <div className="
   sticky
   top-0
   w-full
   bg-slate-200
   z-30
   shadow-sm

   ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div>
                    <link href="/">E-Shop</link>
                    <div>Search</div>
                    <div>
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>
        </div>
   </div>
};

export default NavBar;
