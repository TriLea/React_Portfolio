import projectList from "../helpers/ProjectList";
import "../assets/styles/Portfolio.css" //structure is a little messed up

//for making project cards
export default function Portfolio()
{

    const cards = projectList;

    return (

        <div className='portfolio'>
            {
                cards.map((card, i) => (
                    <div className='card' key={i}>
                    <img src={card.cardImg} />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <br />
                    <a href={card.repoLink}>Repo</a>
                    {card.deployedLink && <a href={card.deployedLink}>Deployed</a>}
                    </div>
                ))
            }
        </div >
    );
}