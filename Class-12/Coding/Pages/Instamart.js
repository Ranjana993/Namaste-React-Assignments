import React, { useState } from 'react'



const Section = ({ title, description, isVisible, setIsVisible }) => {
    // const [isVisible, setIsVisible] = useState(true);

    return (
        <div style={{ border: '1px solid black', margin: "12px", padding: "12px" }}>
            <h3>{title}</h3>
            {
                isVisible ? <button onClick={() => setIsVisible(false)}>hide</button> : <button onClick={() => setIsVisible(true)}>Show</button>
            }
            {
                isVisible && <p>{description}</p>
            }

        </div>
    )
}

const Instamart = () => {
    // const [sectionConfig, setSectionConfig] = useState({
    //     about: true,
    //     career: false,
    //     profile: false
    // })
    const [visibleSection , setVisibleSection] = useState("about")
    return (
        <>
            <h1>Instamart </h1>
            <Section
                title={"About  "}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam."}
                isVisible={visibleSection === "about"}
                setIsVisible={() => setVisibleSection("about")}
            />
            <Section
                title={"Careers "}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam. "}
                isVisible={visibleSection === "career"}
                setIsVisible={() => setVisibleSection("career")}
            />
            <Section
                title={"Profile "}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores, provident officiis libero officia esse perferendis necessitatibus saepe ea nihil consequuntur excepturi doloribus ab exercitationem, nemo eligendi, vero porro quibusdam. "}
                isVisible={visibleSection === "Profile"}
                setIsVisible={() => setVisibleSection("Profile")}
            />
        </>
    )
}

export default Instamart