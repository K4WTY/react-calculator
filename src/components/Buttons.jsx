export function Buttons({ value, calculate })  {
    return (
        <>
            <button id={ value } onClick={ () => calculate(value) } value={ value }>{ value }</button>
        </>
    )
}