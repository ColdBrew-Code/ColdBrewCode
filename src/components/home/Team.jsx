import "./Team.css";

const teamMembers = [
    { name: "Shanna Graves", role: "Full Stack Developer", bio: "Shanna is a versatile full stack developer with a creative eye for web design. Their adaptive approach means every software solution is tailor-made to fill a need.", portfolio: "https://gravessoftware.dev"},
    { name: "Geoffrey Wortham", role: "Frontend Developer", bio: "Geoffrey is a frontend specialist who thrives on pushing the limits of what interfaces can do. His drive to explore every corner of the craft means every project is not only beautiful but built to perform.", portfolio:"#"},
    { name: "Nyx Strong", role: "Backend Developer", bio: "Nyx is a backend developer who loves to solve complex problems with elegant code. Her skills shine through on every project, ensuring that every solution is functional, efficient, and built to last.", portfolio:"#"},
    { name: "Wilhelmina Vanderpool", role: "Full Stack Developer", bio: "Mina is a full stack developer specializing in UI/UX and accessible design. She builds practical web applications, databases, and tools with a strong emphasis on usability, maintainability, and user experience. Her goal is to create software that not only works well but is intuitive and enjoyable to use.", portfolio:"https://minasaur.com/"},
    { name: "Scarlett Conyers", role: "Graphic Designer", bio: "Scarlett is a prolific graphic designer with a passion for creating visually stunning and impactful designs. She is dedicated to delivering creative solutions that resonate with audiences.", portfolio:"#"}

];

function Team() {
    return (
        <section id="team" className="team">
            <h2 className="team-title">Our Team</h2>
            <div className="team-rule" />
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                        <p className="team-member-bio">{member.bio}</p>
                        <a className="team-member-portfolio" href={member.portfolio} target="_blank">View Portfolio</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
