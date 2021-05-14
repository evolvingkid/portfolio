import Wrapper from "../../helpers/Wrapper";
import './navBar.css';
import NavTile from "./navTile/NavTile";
import { leftItems, rightItems } from "../../global/navBar";

const Navbar = () => {

    const letftItemsRender = () => {
        return leftItems.map(val => <NavTile postionSecoundary="false" key={val.id} title={val.title} icon={val.icon} />);
    }

    const rightItemRender = () => {
        return rightItems.map(val => <NavTile postionSecoundary="true" title={val.title} key={val.id} />);
    }

   
    return (

        <Wrapper>
            <nav>
                {letftItemsRender()}

                {rightItemRender()}

            </nav>

        </Wrapper>
    );

}

export default Navbar;