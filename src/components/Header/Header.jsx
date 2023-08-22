import css from 'components/Header/header.module.css';
import AuthMenu from 'components/MenuAuth/AuthMenu';
import UserMenu from 'components/MenuUser/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = ({ headTitle, headSubTitle }) => {
    const { isLoggedIn } = useAuth();

    return (
        <div className={css.wrapper} >
            <div className='container flex-wrap'>
                <div>
                    <Link to="/" className={css.title}>{headTitle}</Link>
                    <p className={css.subtitle}>{headSubTitle}</p>
                </div>
                <div className={css.flexChild}>
                    {isLoggedIn ? <UserMenu /> : <AuthMenu />}
                </div>
            </div>
        </div>
    )
}

export default Header;