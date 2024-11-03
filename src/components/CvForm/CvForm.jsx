
import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color'; 
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaThumbtack } from 'react-icons/fa';

// const CVForm = ({ onChange }) => {
//     // const[addField,setaddfield]=useState(false)
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         experience: '',
//         education: '',
//         city: '',
//         district: '',
//         linkedin: '',
//         github: '',
//         certificates: [{ name: '', link: '' }],
//         files: [],
//         image: null, // New image field
//         imageStyles: {
//             backgroundColor: '#fff', // Default background color for image
//             borderRadius: '4px', // Default border radius for image
//         },
//         colors: {
//             name: '#000', // Color for name
//             email: '#000', // Color for email
//             phone: '#000', // Color for phone
//             experience: '#000', // Color for experience
//             education: '#000', // Color for education
//             image: '#fff',
//         },
//         styles: {
//             input: {
//                 borderRadius: '4px',
//                 fontSize: '16px',
//             },
//             fileInput: {
//                 borderRadius: '4px',
//             },
//         },
//     });

//     const [activePicker, setActivePicker] = useState(null); // State to track active color picker

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const updatedData = { ...formData, [name]: value };
//         setFormData(updatedData);
//         onChange(updatedData);
//     };

//     const handleFileChange = (index, event) => {
//         const selectedFile = event.target.files[0];
//         if (selectedFile) {
//             const updatedFiles = [...formData.files];
//             updatedFiles[index] = selectedFile;
//             const updatedData = { ...formData, files: updatedFiles };
//             setFormData(updatedData);
//             onChange(updatedData);
//         }
//     };

//     const handleAddField = () => {
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             files: [...prevFormData.files, null], // Add a new empty slot for another file
//         }));
//     };
//     const handleColorChange = (field) => (color) => {
//         const updatedColors = { ...formData.colors, [field]: color.hex };
//         const updatedData = { ...formData, colors: updatedColors };
//         setFormData(updatedData);
//         onChange(updatedData);
//     };
//     const handleCertificateChange = (index, field, value) => {
//         const updatedCertificates = formData.certificates.map((cert, idx) =>
//             idx === index ? { ...cert, [field]: value } : cert
//         );
//         const updatedData = { ...formData, certificates: updatedCertificates };
//         setFormData(updatedData);
//         onChange(updatedData);
//     };

//     const handleAddCertificate = () => {
//         setFormData({
//             ...formData,
//             certificates: [...formData.certificates, { name: '', link: '' }],
//         });
//     };


//     // Click outside handler
//     const handleClickOutside = (event) => {
//         const { target } = event;
//         const isPickerOpen = Object.values(activePicker).some(Boolean);
//         if (isPickerOpen && !event.target.closest('.color-picker-container')) {
//             setActivePicker(null); // Close all pickers if clicked outside
//         }
//     };
//     const handleImageChange = (e) => {
//         const selectedImage = URL.createObjectURL(e.target.files[0]); // Create a URL for the image
//         if (selectedImage) {
//             const updatedData = { ...formData, image: selectedImage };
//             setFormData(updatedData);
//             onChange(updatedData);
//         }
//     };
//     const handleImageStyleChange = (styleType, value) => {
//         const updatedStyles = {
//             ...formData.imageStyles,
//             [styleType]: value,
//         };
//         const updatedData = { ...formData, imageStyles: updatedStyles };
//         setFormData(updatedData);
//         onChange(updatedData);
//     };
 
//     // Attach event listener on mount
//     useEffect(() => {
//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [activePicker]);

//     const toggleColorPicker = (field) => {
//         if (activePicker === field) {
//             setActivePicker(null); // Close if clicking the open picker again
//         } else {
//             setActivePicker(field); // Open the selected color picker
//         }
//     };

//     return (
//         <form style={{maxWidth:"300px"}}>
//             {/* Name Field */}
//             <div className="color-picker-container">
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     style={{
//                         color: formData.colors.name,
//                         borderRadius: formData.styles.input.borderRadius,
//                         fontSize: formData.styles.input.fontSize,
//                         border: '2px solid #333',
//                         padding: '8px',
//                         width: '100%',
//                         boxSizing: 'border-box',
//                         marginBottom: '15px',
//                     }}
//                 />
//                 <button type="button" onClick={() => toggleColorPicker('name')}>
//                     Choose Color
//                 </button>
//                 {activePicker === 'name' && (
//                     <SketchPicker
//                         color={formData.colors.name}
//                         onChangeComplete={handleColorChange('name')}
//                     />
//                 )}
//             </div>

//             {/* Email Field */}
//             <div className="color-picker-container">
//                 <label>Email:</label>
//                 <input
//                     type="text"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     style={{
//                         color: formData.colors.email,
//                         borderRadius: formData.styles.input.borderRadius,
//                         fontSize: formData.styles.input.fontSize,
//                         border: '2px solid #333',
//                         padding: '8px',
//                         width: '100%',
//                         boxSizing: 'border-box',
//                         marginBottom: '15px',
//                     }}
//                 />
//                 <button type="button" onClick={() => toggleColorPicker('email')}>
//                     Choose Color
//                 </button>
//                 {activePicker === 'email' && (
//                     <SketchPicker
//                         color={formData.colors.email}
//                         onChangeComplete={handleColorChange('email')}
//                     />
//                 )}
//             </div>

//             {/* Phone Field */}
//             <div className="color-picker-container">
//                 <label>Phone:</label>
//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     style={{
//                         color: formData.colors.phone,
//                         borderRadius: formData.styles.input.borderRadius,
//                         fontSize: formData.styles.input.fontSize,
//                         border: '2px solid #333',
//                         padding: '8px',
//                         width: '100%',
//                         boxSizing: 'border-box',
//                         marginBottom: '15px',
//                     }}
//                 />
//                 <button type="button" onClick={() => toggleColorPicker('phone')}>
//                     Choose Color
//                 </button>
//                 {activePicker === 'phone' && (
//                     <SketchPicker
//                         color={formData.colors.phone}
//                         onChangeComplete={handleColorChange('phone')}
//                     />
//                 )}
//             </div>

//             {/* Experience Field */}
//             <div className="color-picker-container">
//                 <label>Experience:</label>
//                 <textarea
//                     name="experience"
//                     placeholder="Your Experience"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     style={{
//                         color: formData.colors.experience,
//                         borderRadius: formData.styles.input.borderRadius,
//                         fontSize: formData.styles.input.fontSize,
//                         border: '2px solid #333',
//                         padding: '8px',
//                         width: '100%',
//                         boxSizing: 'border-box',
//                         marginBottom: '15px',
//                     }}
//                 />
//                 <button type="button" onClick={() => toggleColorPicker('experience')}>
//                     Choose Color
//                 </button>
//                 {activePicker === 'experience' && (
//                     <SketchPicker
//                         color={formData.colors.experience}
//                         onChangeComplete={handleColorChange('experience')}
//                     />
//                 )}
//             </div>

//             {/* Education Field */}
//             <div className="color-picker-container">
//                 <label>Education:</label>
//                 <textarea
//                     name="education"
//                     placeholder="Your Education"
//                     value={formData.education}
//                     onChange={handleChange}
//                     style={{
//                         color: formData.colors.education,
//                         borderRadius: formData.styles.input.borderRadius,
//                         fontSize: formData.styles.input.fontSize,
//                         border: '2px solid #333',
//                         padding: '8px',
//                         width: '100%',
//                         boxSizing: 'border-box',
//                         marginBottom: '15px',
//                     }}
//                 />
//                 <button type="button" onClick={() => toggleColorPicker('education')}>
//                     Choose Color
//                 </button>
//                 {activePicker === 'education' && (
//                     <SketchPicker
//                         color={formData.colors.education}
//                         onChangeComplete={handleColorChange('education')}
//                     />
//                 )}
//             </div>

//             {/* File Upload Field */}
//             <div>
//                 <label>Upload Certificates:</label>
//                 {formData.files.map((file, index) => (
//                     <div key={index} style={{ marginBottom: '10px' }}>
//                         <input
//                             type="file"
//                             onChange={(e) => handleFileChange(index, e)}
//                             style={{
//                                 borderRadius: formData.styles.fileInput.borderRadius,
//                             }}
//                         />
//                         {file && <p>Uploaded: {file.name}</p>}
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleAddField}>
//                     Add More
//                 </button>
//             </div>
//  {/* City and District Fields */}
//  <div>
//                 <label><FaMapMarkerAlt /> Address:</label>
//                 <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     value={formData.city}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="district"
//                     placeholder="District"
//                     value={formData.district}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Social Media Links */}
//             <div>
//                 <label><FaLinkedin /> LinkedIn:</label>
//                 <input
//                     type="text"
//                     name="linkedin"
//                     placeholder="LinkedIn Profile"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label><FaGithub /> GitHub:</label>
//                 <input
//                     type="text"
//                     name="github"
//                     placeholder="GitHub Profile"
//                     value={formData.github}
//                     onChange={handleChange}
//                 />
//             </div>

//             {/* Certificates with Pin Icon */}
//             <div>
//                 <label><FaThumbtack /> Certificates:</label>
//                 {formData.certificates.map((cert, index) => (
//                     <div key={index}>
//                         <input
//                             type="text"
//                             placeholder="Certificate Name"
//                             value={cert.name}
//                             onChange={(e) => handleCertificateChange(index, 'name', e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Link to Certificate"
//                             value={cert.link}
//                             onChange={(e) => handleCertificateChange(index, 'link', e.target.value)}
//                         />
//                     </div>
//                 ))}
//                 <button type="button" onClick={handleAddCertificate}>Add Certificate</button>
//             </div>
//             {/* Image Upload Field */}
//             <div>
//                 <label>Upload Image:</label>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     style={{
//                         borderRadius: formData.styles.fileInput.borderRadius,
//                     }}
//                 />
               
//                 {/* Border Radius Input */}
//                 <input
//                     type="range"
//                     min="0"
//                     max="50"
//                     value={parseInt(formData.imageStyles.borderRadius)}
//                     onChange={(e) => handleImageStyleChange('borderRadius', `${e.target.value}px`)}
//                 />
//             </div>
//         </form>
//     );
// };

// export default CVForm;



const CVForm = ({ onChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: { city: '', district: '' },
        linkedin: '',
        github: '',
        professionalSummary:"",
        experience: [{ organization: '', years: '', position: '', address: '' }],
        projects: [{
            name: '',
            image: null,
            shortDescription: '',
            isTeamProject: false, // solo or team indicator
            techStack: '',
            timeRequired: '',
            repoLink: '',       
            liveLink: '',    
        }],
        softSkills:[],
        technicalSkills:[],
        education: [
            { level: '10th', grade: '', year: '' },
            { level: '12th', grade: '', year: '' },
            { level: 'Graduation', grade: '', year: '' },
        ],
        certificates: [{ name: '', organization: '', duration: '', link: '' }],
        colors: {
            name: '#000000',
            email: '#000000',
            phone: '#000000',
            experience: '#000000',
            education: '#000000',
        },
        fontSize: '16px', // Default font size
        styles: { // Adding a default `styles` object to avoid undefined errors
            input: {
                borderRadius: '4px',
                fontSize: '16px',
            }
        }
    });
   
    const [activePicker, setActivePicker] = useState(null);
    const [manualSoftSkill, setManualSoftSkill] = useState('');
    const [manualTechnicalSkill, setManualTechnicalSkill] = useState('');
    const availableTechnicalSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
   
    const handleImageChange = (e) => {
        const selectedImage = URL.createObjectURL(e.target.files[0]); // Create a URL for the image
        if (selectedImage) {
            const updatedData = { ...formData, image: selectedImage };
            setFormData(updatedData);
            onChange(updatedData);
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        onChange && onChange(updatedData);
    };

    const handleProjectImageChange = (index, file) => {
        const imageUrl = URL.createObjectURL(file);
        handleFieldChange("projects", index, "image", imageUrl);
    };

    const handleFieldChange = (section, index, field, value) => {
        const updatedSection = formData[section].map((item, idx) =>
            idx === index ? { ...item, [field]: value } : item
        );
        const updatedData = { ...formData, [section]: updatedSection };
        setFormData(updatedData);
        onChange && onChange(updatedData);
    };

    const handleAddField = (section, emptyField) => {
        // Ensure we're correctly adding a new item to the specified section
        setFormData((prevFormData) => {
            const updatedSection = [...prevFormData[section], emptyField];
            const updatedData = { ...prevFormData, [section]: updatedSection };
            onChange && onChange(updatedData);
            return updatedData; // Return updated data to apply the state change
        });
    };
    const handleAddProject = (section) => {
        setFormData((prevFormData) => {
          const newProject = {
            name: '',
            image: null,
            shortDescription: '',
            isTeamProject: false,
            techStack: '',
            timeRequired: '',
            repoLink: '',
            liveLink: '',
          };
      
          const updatedSection = [...prevFormData[section], newProject];
          return { ...prevFormData, [section]: updatedSection };
        });
      };

    const handleDeleteField = (section, index) => {
        setFormData((prevFormData) => {
            const updatedSection = prevFormData[section].filter((_, idx) => idx !== index);
            const updatedData = { ...prevFormData, [section]: updatedSection };
            onChange && onChange(updatedData);
            return updatedData;
        });
    };

    const handleColorChange = (field) => (color) => {
        const updatedColors = { ...formData.colors, [field]: color.hex };
        const updatedData = { ...formData, colors: updatedColors };
        setFormData(updatedData);
        onChange && onChange(updatedData);
    };

    const handleClickOutside = (event) => {
        if (activePicker && !event.target.closest('.color-picker-container')) {
            setActivePicker(null);
        }
    };
    const toggleTechnicalSkill = (skill) => {
        setFormData(prev => {
            const alreadySelected = prev.technicalSkills.includes(skill);
            const updatedTechnicalSkills = alreadySelected
                ? prev.technicalSkills.filter(s => s !== skill) // Remove if already selected
                : [...prev.technicalSkills, skill]; // Add if not selected

            const updatedData = { ...prev, technicalSkills: updatedTechnicalSkills };
            onChange && onChange(updatedData); // Trigger the onChange callback
            return updatedData;
        });
    };

    const addSoftSkill = () => {
        if (manualSoftSkill && !formData.softSkills.includes(manualSoftSkill)) {
            setFormData(prev => ({
                ...prev,
                softSkills: [...prev.softSkills, manualSoftSkill]
            }));
            setManualSoftSkill(''); // Clear the input after adding
            onChange && onChange({ ...formData, softSkills: [...formData.softSkills, manualSoftSkill] }); // Trigger onChange
        }
    };

    const addManualTechnicalSkill = () => {
        if (manualTechnicalSkill && !formData.technicalSkills.includes(manualTechnicalSkill)) {
            setFormData(prev => {
                const updatedTechnicalSkills = [...prev.technicalSkills, manualTechnicalSkill];
                const updatedData = { ...prev, technicalSkills: updatedTechnicalSkills };
                onChange && onChange(updatedData); // Trigger onChange with the updated data
                return updatedData; // Return the updated state
            });
            setManualTechnicalSkill(''); // Clear the input after adding
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [activePicker]);

    const toggleColorPicker = (field) => {
        setActivePicker(activePicker === field ? null : field);
    };

    return (
        <form  className="cv-form">
            {/* Name Field */}
            <div className="color-picker-container">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        color: formData.colors.name,
                        borderRadius: formData.styles.input.borderRadius,
                        fontSize: formData.styles.input.fontSize,
                        border: '2px solid #333',
                        padding: '8px',
                        width: '100%',
                        boxSizing: 'border-box',
                        marginBottom: '15px',
                    }}
                />
                <button type="button" onClick={() => toggleColorPicker('name')}>Choose Color</button>
                {activePicker === 'name' && (
                    <SketchPicker color={formData.colors.name} onChangeComplete={handleColorChange('name')} />
                )}
            </div>

            {/* Email and Phone Fields */}
            <div className="color-picker-container">
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ ...formData.styles.input, color: formData.colors.email }}
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
             <div>
                <label htmlFor="">Professional Summary</label>
                <textarea name="professionalSummary" id=""  value={formData.professionalSummary}   onChange={handleChange}></textarea>
             </div>
            {/* Address Fields */}
            <div className='cv_form_inp'>
                <label><FaMapMarkerAlt /> Address:</label>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.address.city}
                    onChange={(e) => setFormData({ ...formData, address: { ...formData.address, city: e.target.value } })}
                />
                <input
                    type="text"
                    name="district"
                    placeholder="District"
                    value={formData.address.district}
                    onChange={(e) => setFormData({ ...formData, address: { ...formData.address, district: e.target.value } })}
                />
            </div>

            {/* Education Section */}
            <div  className='cv_form_inp'>
                <h3>Education</h3>
                {formData.education.map((edu, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Education Level"
                            value={edu.level}
                            onChange={(e) => handleFieldChange('education', index, 'level', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Grade/Percentage"
                            value={edu.grade}
                            onChange={(e) => handleFieldChange('education', index, 'grade', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Year of Passing"
                            value={edu.year}
                            onChange={(e) => handleFieldChange('education', index, 'year', e.target.value)}
                        />
                        {index >= 0 && (
                            <button type="button" onClick={() => handleDeleteField('education', index)}>Delete</button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={() => handleAddField('education', { level: '', grade: '', year: '' })}>Add Education</button>
            </div>
             {/* projects  */}
             <div>
            <h3>Projects</h3>
            {formData.projects.map((project, index) => (
                <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) => handleFieldChange('projects', index, 'name', e.target.value)}
                    />
                    <input
                        type="file"
                        onChange={(e) => handleProjectImageChange(index, e.target.files[0])}
                    />
                    {project.image && <img src={project.image} alt="Project" width="100" />}

                    <textarea
                        placeholder="Short Description"
                        value={project.shortDescription}
                        onChange={(e) => handleFieldChange('projects', index, 'shortDescription', e.target.value)}
                    />

                    <label>
                        Team Project:
                        <input
                            type="checkbox"
                            checked={project.isTeamProject}
                            onChange={(e) => handleFieldChange('projects', index, 'isTeamProject', e.target.checked)}
                        />
                    </label>

                    <input
                        type="text"
                        placeholder="Tech Stack"
                        value={project.techStack}
                        onChange={(e) => handleFieldChange('projects', index, 'techStack', e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Time Required"
                        value={project.timeRequired}
                        onChange={(e) => handleFieldChange('projects', index, 'timeRequired', e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="Git repo link"
                        value={project.repoLink}
                        onChange={(e) => handleFieldChange('projects', index, 'repoLink', e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="Live link"
                        value={project.liveLink}
                        onChange={(e) => handleFieldChange('projects', index, 'liveLink', e.target.value)}
                    />
                    <button onClick={() => handleDeleteField('projects', index)}>Delete Project</button>
                </div>
            ))}
            <button onClick={() => handleAddProject('projects')}>Add Project</button>
        </div>
            {/* Experience Section */}
            <div  className='cv_form_inp'>
                <h3>Experience</h3>
                {formData.experience.map((exp, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Organization"
                            value={exp.organization}
                            onChange={(e) => handleFieldChange('experience', index, 'organization', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Years"
                            value={exp.years}
                            onChange={(e) => handleFieldChange('experience', index, 'years', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Position"
                            value={exp.position}
                            onChange={(e) => handleFieldChange('experience', index, 'position', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={exp.address}
                            onChange={(e) => handleFieldChange('experience', index, 'address', e.target.value)}
                        />
                        <button type="button" onClick={() => handleDeleteField('experience', index)}>Delete</button>
                    </div>
                ))}
                <button type="button" onClick={() => handleAddField('experience', { organization: '', years: '', position: '', address: '' })}>Add Experience</button>
            </div>

            {/* Social Media Links */}
            <div>
                <label><FaLinkedin /> LinkedIn:</label>
                <input type="text" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} />
            </div>
            <div>
                <label><FaGithub /> GitHub:</label>
                <input type="text" name="github" placeholder="GitHub Profile" value={formData.github} onChange={handleChange} />
            </div>

            {/* Certificates */}
            <div  className='cv_form_inp'>
                <label><FaThumbtack /> Certificates:</label>
                {formData.certificates.map((cert, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder="Certificate Name"
                            value={cert.name}
                            onChange={(e) => handleFieldChange('certificates', index, 'name', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Organization"
                            value={cert.organization}
                            onChange={(e) => handleFieldChange('certificates', index, 'organization', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Duration"
                            value={cert.duration}
                            onChange={(e) => handleFieldChange('certificates', index, 'duration', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            value={cert.link}
                            onChange={(e) => handleFieldChange('certificates', index, 'link', e.target.value)}
                        />
                        <button type="button" onClick={() => handleDeleteField('certificates', index)}>Delete</button>
                    </div>
                ))}
                <button type="button" onClick={() => handleAddField('certificates', { name: '', organization: '', duration: '', link: '' })}>Add Certificate</button>
            </div>
            <div>
            <h3>Technical Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {availableTechnicalSkills.map(skill => (
                    <div 
                        key={skill}
                        onClick={() => toggleTechnicalSkill(skill)} 
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            backgroundColor: formData.technicalSkills.includes(skill) ? '#cce5ff' : '#f8f9fa'
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>

            <h4>Add a Technical Skill (if not listed)</h4>
            <input
                type="text"
                value={manualTechnicalSkill}
                onChange={(e) => setManualTechnicalSkill(e.target.value)}
                placeholder="Enter new technical skill"
            />
            <button onClick={addManualTechnicalSkill}>Add Technical Skill</button>

            <h3>Soft Skills</h3>
            <input
                type="text"
                value={manualSoftSkill}
                onChange={(e) => setManualSoftSkill(e.target.value)}
                placeholder="Enter soft skill"
            />
            <button onClick={addSoftSkill}>Add Soft Skill</button>
            <ul>
                {formData.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
                 {/* Image Upload Field */}
           <div>
                 <label>Upload Image:</label>
                 <input
                    type="file"
                    accept="image/*"
                     onChange={handleImageChange}
                     style={{
                        //  borderRadius: formData.styles.fileInput.borderRadius,
                     }}
                 />
               
                
             </div>  

            
        </form>
    );
};

export default CVForm;
