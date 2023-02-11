import React from 'react';

function JourneyText(props) {
    
    let skillsArray = [];

    if(props.text.skills){
        props.text.skills.forEach(skill => {
            if(skill == 'html') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg');
            }

            else if(skill == 'css') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg');
            }

            else if(skill == 'javascript') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg');
            }

            else if(skill == 'sql') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg');
            }

            else if(skill == 'php') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg');
            }

            else if(skill == 'symfony') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg');
            }

            else if(skill == 'linux') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg');
            }

            else if(skill == 'python') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg');
            }

            else if(skill == 'django') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg');
            }

            else if(skill == 'nodejs') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg');
            }

            else if(skill == 'react') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
            }

            else if(skill == 'java') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg');
            }

            else if(skill == 'github') {
                skillsArray.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg');
            }
        })};

    return (
        <div style={{width: '100%'}}>
            <h4>{props.text.title}</h4>
            <p>{props.text.subTitle}</p>
            <p style={{fontSize: '1.2em'}}>{props.text.description}</p>
            <div className="skills-logo-wrapper">
                {skillsArray.map((skill) => {
                    return <img src={skill} />
                })}
            </div>
        </div> 
    )

}
export default JourneyText;