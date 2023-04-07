import '../assets/styles/Resume.css';

export default function Resume() 
{
    return(
        <div className="resume">
            <h2>Resume</h2>
            <a href="../assets/tempResume.docx" download="Tristan's Resume" target="_blank">
                <button>Download Resume</button>
            </a>
        </div>
    );
}