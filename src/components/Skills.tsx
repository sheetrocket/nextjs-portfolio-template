import Image from 'next/image';

const skillsData = [
    {
        id: 1,
        title: "Strategy & Direction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: "/images/icon-strategy.png",
        alt: "Strategy",
        hasBorder: true
    },
    {
        id: 2,
        title: "Branding & Logo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: "/images/icon-branding.png",
        alt: "Branding",
        hasBorder: false
    },
    {
        id: 3,
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: "/images/icon-ui-ux.png",
        alt: "UI/UX",
        hasBorder: false
    },
    {
        id: 4,
        title: "Webflow Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        icon: "/images/icon-webflow.png",
        alt: "Webflow",
        hasBorder: false
    }
];

export default function Skills() {
    return (
        <section className="py-32 bg-lighter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h3 className="text-xl font-semibold text-dark mb-4">My Skills</h3>
                    <h2 className="text-5xl lg:text-6xl font-bold text-dark">My Expertise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.id}
                            className={`bg-light rounded-xl p-8 ${skill.hasBorder ? 'border-b-4 border-primary' : ''}`}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-6">
                                <Image
                                    src={skill.icon}
                                    alt={skill.alt}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-4">{skill.title}</h3>
                            <p className="text-lg text-dark/60">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 