const User = ({name,age,img}) =>
{

    return (
        <div className='user'>
            <div className='user-img'>
                <img src={img} alt={name} />
            </div>
            <div className='user-info'>
                <h2>{name}</h2>
                <p>{age} years</p>
            </div>
        </div>
    )
}

export default User;