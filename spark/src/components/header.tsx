export const Header = () => 
 {

    return <>
    <div className="flex justify-between  w-11/12 mx-auto  ">

        <img className= "w-1/9 flex "  src="/sparkImg.png"/>

        <ul className="flex gap-4  justify-end items-center">
            <li>today</li>
            <li>History</li>
            <li>About</li>
        </ul>
    </div>
    </>
 }