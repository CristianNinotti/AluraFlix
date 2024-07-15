import Image from '../Image';
import banner from './dev1.webp';
import Title from '../Title';
import './Banner.modules.css';

function Banner(){
    return(
    <>
        <div className="banner">
            <Image styles="img" img={banner} type="img" alt="" />
        </div>
    </>
    );
}

export default Banner