import Doggo from './dog.jpg'
const SomeApp = () => {



    
    const address = {
        forename: "Billy",
        surname: "Mills",
        line1: "QA Consulting",
        line2: "A road somewhere",
        city: "London",
        zip: "1234 ABC"
    }

    return (
        <div>
            <h1>{address.forename}</h1>
            <h1>{address.surname}</h1>
            <h1>{address.line1}</h1>
            <h1>{address.line2}</h1>
            <h1>{address.city}</h1>
            <h1>{address.zip}</h1>
            
            <img src= {Doggo}></img>
        </div>
    );
}
export default SomeApp;




