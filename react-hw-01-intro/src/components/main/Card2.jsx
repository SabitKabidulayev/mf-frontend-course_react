import classes from './MainComp.module.css'

function Card2(props) {
    return (
        <div className={classes.card}>
            <h2 className={classes.title}>Title2</h2>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla labore qui id harum corrupti a facere illum odio expedita, ratione aliquam culpa sequi, cumque fugiat.</p>
            <button className={classes.button}>Button</button>
        </div>
    )
}

export default Card2