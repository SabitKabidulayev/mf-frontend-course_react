import classes from './Footer.module.css'

function Footer (props) {
    return (
        <footer>
            <div className={classes.companyInfo}>
                <p className={classes.text}>About us: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit?
                </p>
            </div>
            <div className={classes.contacts}>
                <p className={classes.text}>Phone: 77 77 77</p>
                <p className={classes.text}>Email: company@mail.com</p>
            </div>
        </footer>
    )
}

export default Footer