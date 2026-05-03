function Header () {

    return(
        <header className="flex justify-between  w-11/12 mx-auto  ">
             <img className="w-12" src="/logo.png"/>
            <nav>
                <lu>
                    <li herf="#" ><a>Today</a></li>
                    <li herf="#"><a>History</a></li>
                    <li herf="#"><a>About</a></li>
                    <hr></hr>
                </lu>
            </nav>

        </header>
    );
}

export default Header