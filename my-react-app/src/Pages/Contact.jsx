import "../assets/styles/Contact.css"

export default function Contact() 
{
    return(
        <form>
            <h1>Contact</h1>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />

            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />

            <label>
                Message:
                <input type="text" name="message" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}