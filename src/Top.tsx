import './TopHeader.css';
import { Link } from "react-router-dom";

function TopH(){
    return(
            <nav>
                <Link to="/home">
                        <h1>
                            Carrer Compass
                        </h1>
                </Link>
                <ul>
                <Link to="/basic">
						<li>basic question</li>
					</Link>
					<Link to="/detailed">
						<li>detailed question</li>
					</Link>
                </ul>
            </nav>
    );

}

export default TopH;