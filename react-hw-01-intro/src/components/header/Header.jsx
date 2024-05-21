import classes from './Header.module.css'

function Header (props) {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://staticdelivery.nexusmods.com/mods/1151/images/thumbnails/10080-0-1455866940.png" alt="" />
            <nav className={classes.navbar}>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <a href="">Link 4</a>
                <a href="">Link 5</a>
            </nav>
        </header>
    )
}

export default Header