import css from 'components/Section/section-title.module.css';
import iconBook from 'icons/png-transparent-application-phonebook-contact-ios-custom-application-icon.jpg'

const Section = ({ title, children }) => {
    return (
        <div className={css.background}>
            <h2 className={css.title}>
                <img src={iconBook} alt='icon' width="38" height="35" className={css.iconBook} />
                {title}</h2>
            {children}
        </div>
    )
}

export default Section;