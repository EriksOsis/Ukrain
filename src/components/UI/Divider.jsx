import './Divider.css';

export function Divider(props) {
    return (
        <hr className={'divider'} style={{backgroundColor: props.color}}/>
    )
}
