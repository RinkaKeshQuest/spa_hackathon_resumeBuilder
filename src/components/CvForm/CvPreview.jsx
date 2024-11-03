

import React, { useState } from 'react';

const CVPreview = ({ data }) => {
    const [frame, setFrame] = useState(1); // Default to Frame 1

    const name = data?.name || "Your Name";
    const email = data?.email || "Your Email";
    const phone = data?.phone || "Your Phone";
    const address = data?.address || "Your Address";
    const education = data?.education || [];
    const professionalSummary = data?.professionalSummary || "Brief professional summary here...";
    const experience = data?.experience || [];
    const projects = data?.projects || [];
    const technicalSkills = data?.technicalSkills || [];
    const softSkills = data?.softSkills || [];
    const achievements = data?.achievements || [];
    const linkedin = data?.linkedin || null;
    const github = data?.github || null;
    const image = data?.image || 'https://via.placeholder.com/150'; // Placeholder if no image is provided

    const frameStyles = {
        1: { padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' },
        2: { padding: '15px', backgroundColor: '#FFF7E6', display: 'flex' },
        3: { padding: '25px', backgroundColor: '#E1F5FE', display: 'flex' },
        4: { padding: '18px', backgroundColor: '#FFFDE7', display: 'flex', flexDirection: 'column-reverse' },
        5: { padding: '22px', backgroundColor: '#E1BEE7', flexDirection: 'column' },
    };

    const handleFrameChange = (event) => {
        setFrame(Number(event.target.value));
    };

    return (
        <div>
            {/* Frame Selection */}
            <div>
                <h4>Select Frame:</h4>
                <select value={frame} onChange={handleFrameChange}>
                    <option value={1}>Frame 1</option>
                    <option value={2}>Frame 2</option>
                    <option value={3}>Frame 3</option>
                    <option value={4}>Frame 4</option>
                    <option value={5}>Frame 5</option>
                </select>
            </div>

            {/* CV Content */}
            <div style={frameStyles[frame]}>
                {/* Image and Address based on Frame */}
                {(frame === 1 || frame === 5) && (
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src={image} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
                        <p>{name}</p>
                        {address && (
                            <p>
                                {address.city ? address.city : null}
                                {address.city && address.district && ', '}
                                {address.district ? address.district : null}
                            </p>
                        )}
                        <p>Email: {email} | Phone: {phone}</p>
                        <p>LinkedIn: {linkedin} | GitHub: {github}</p>
                    </div>
                )}
                {(frame === 2 || frame === 3) && (
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        {frame === 2 && (
                            <>
                                <div style={{ marginRight: '20px', textAlign: 'center' }}>
                                    <img src={image} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
                                    <p>{name}</p>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                </div>

                            </>
                        )}
                        {frame === 3 && (
                            <>

                                <div style={{ marginLeft: '20px', textAlign: 'center' }}>
                                    <img src={image} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
                                    <p>{name}</p>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                </div>
                            </>
                        )}
                    </div>
                )}
                {frame === 4 && (
                    <>
                        <div>
                            <h1>{name}</h1>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <img src={image} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
                            <p>Email: {email} | Phone: {phone}</p>
                        </div>
                    </>
                )}

                <div style={{ display: 'flex', gap: '20px', flexDirection: frame === 5 ? 'column' : 'row' }}>
                    {/* Left Side: Soft Skills, Tech Skills, Achievements */}
                    <div style={{ flex: 1 }}>
                        <h3>Education</h3>
                        {education.map((edu, index) => (
                            <div key={index}>
                                <strong>{edu.level}</strong> -
                                {edu.grade ? ` Grade: ${edu.grade}` : null}
                                {edu.year ? ` (Year of Passing: ${edu.year})` : null}
                            </div>
                        ))}


                        <h3>Soft Skills</h3>
                        <p>{softSkills.join(', ')}</p>
                        <h3>Technical Skills</h3>
                        <p>{technicalSkills.join(', ')}</p>
                        <h3>Achievements</h3>
                        <ul>
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Summary, Projects, Experience */}
                    <div style={{ flex: 1 }}>
                        <h3>Professional Summary</h3>
                        <p>{professionalSummary}</p>

                        <h3>Projects</h3>
                        {projects.map((project, index) => (
                            <div key={index}>
                                <strong>{project.name}</strong>
                                <p>{project.shortDescription}</p>
                            </div>
                        ))}

                        <h3>Experience</h3>
                        {experience.map((exp, index) => (
                            <div key={index}>
                                <strong>{exp.organization}</strong> - {exp.position} ({exp.years} years)
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVPreview;
