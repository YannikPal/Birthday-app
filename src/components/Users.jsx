import React,{useState} from "react";
import User from "./User";
import Title from "./Title";

const Users = () =>
{
    const [birthdays, setBirthdays] = useState([ {
        id: 1,
        name: "Sabrina Topacio",
        age: 29,
        img: "https://www.course-api.com/images/people/person-1.jpeg"
    },
    {
        id: 2,
        name: "Czarina Hogan",
        age: 32,
        img: "https://www.course-api.com/images/people/person-2.jpeg"
    },
    {
        id: 3,
        name: "Larry Little",
        age: 36,
        img: "https://www.course-api.com/images/people/person-3.jpeg"
    },
    {
        id: 4,
        name: "Lee Hector",
        age: 34,
        img: "https://www.course-api.com/images/people/person-4.jpeg"
    },
    {
        id: 5,
        name: "Erin Brown",
        age: 34,
        img: "https://www.course-api.com/images/people/person-5.jpeg"
    }]);
 

    const handleClear = () =>
    {
        setBirthdays([]);
    }
    return (
        <div>
            <Title birthdays={ birthdays.length}/>
            {
                birthdays.map((birthday) => {
                    return <User key={birthday.id} {...birthday} />
                })
            }
            
            <div>
                <button className="btn-clear" onClick={handleClear}>Clear All</button>
            </div>
        </div>
    )
}   

export default Users;