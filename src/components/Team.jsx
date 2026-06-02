import "./Team.css";

const teamMembers = [
    { name: "Shanna Graves", role: "Full Stack Developer", bio: "Shanna is a versatile developer with a passion for crafting seamless user experiences. With expertise in both frontend and dabbling in backend technologies, they bring a holistic approach to software development."},
    { name: "Geoffrey Wortham", role: "Frontend Developer", bio: "Geoffrey is a frontend specialist who thrives on creating visually stunning and intuitive interfaces. Smoothly blending design and funtionality, they ensure every project is not only beautiful but also user-friendly."}
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;