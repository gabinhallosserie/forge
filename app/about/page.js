import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-amber-200">
            <Navbar />

            <div className="flex flex-col px-20 py-16 gap-16 max-w-4xl">
                <section>
                    <h1 className="text-xl font-black text-black mb-1">The FORGE Project</h1>
                    <p className="text-md text-black">
                        FORGE is a fictional PC configurator designed to provide a smooth, intuitive experience for building your ideal computer setup.
                        It was created as a personal project to demonstrate my skills in front-end web development, UI/UX design, and responsive layout.
                        The goal: make building a custom PC feel simple, engaging, and accessible.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-1">About Me</h2>
                    <p className="text-md text-black">
                        I&apos;m a passionate web developer with a strong interest in clean design and interactive experiences.
                        FORGE was an opportunity to experiment, learn, and showcase what I enjoy doing — building user-centered tools with personality.
                        I care about simplicity, performance, and crafting interfaces that feel good to use.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-black mb-1">Tech Stack</h2>
                    <ul className="text-md text-black list-disc list-inside">
                        <li><strong>Next.js</strong> – React framework for routing and performance</li>
                        <li><strong>Tailwind CSS</strong> – Utility-first CSS for modern, responsive design</li>
                        <li><strong>WebStorm</strong> – Main development environment</li>
                        <li><strong>Git & GitHub</strong> – Version control and code hosting</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
