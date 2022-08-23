import './card.css'
function Card(props){
    const classes = 'card ' + props.className
    return (<p className={classes}> {props.children} </p>)
}

export default Card