import css from 'components/Header/header.module.css';
import AuthMenu from 'components/MenuAuth/AuthMenu';
import UserMenu from 'components/MenuUser/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { TiThMenuOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { closeMenu, openMenu } from 'redux/reducers/menuSlice';

const Header = ({ headTitle, headSubTitle }) => {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    if (isDesktopOrTablet) dispatch(closeMenu());

    const handleBurgerMenu = () => dispatch(openMenu());

    return (
        <div className={css.wrapper} >
            <div className='container flex-wrap'>

                <div className={css.flexWrapp}>
                    {isMobile && (
                        <button type='button' onClick={handleBurgerMenu} className={css.button}>
                            <TiThMenuOutline className={css.burgerIcons} />
                        </button>)}

                    <div className={css.wrapText}>
                        <Link to="/" className={css.title}>{headTitle}</Link>
                        <p className={css.subtitle}>{headSubTitle}</p>
                    </div>
                </div>

                {isDesktopOrTablet && (<div className={css.flexChild}>
                    {isLoggedIn ? <UserMenu /> : <AuthMenu />}
                </div>)}
            </div>
        </div>
    )
}

export default Header;