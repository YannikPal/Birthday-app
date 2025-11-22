
const Title = ({birthdays}) =>
{
    return (<>
        <h2  className="birthday-title"> { birthdays} {birthdays>1?'Birthdays':'Birthday'} Today</h2>
    </>)
}

export default Title;