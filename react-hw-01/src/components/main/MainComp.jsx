import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import classes from './MainComp.module.css'

function Main (props) {
    return (
        <main className={classes.main}>
            <Card1 />
            <Card2 />
            <Card3 />
        </main>
    )
}

export default Main