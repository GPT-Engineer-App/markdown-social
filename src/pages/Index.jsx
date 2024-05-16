import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-roboto-mono">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-gray-600">Full Stack Developer</p>
      </header>
      <main className="w-full max-w-4xl px-4">
        <section className="mb-8 invisible">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-4">
              <img src="project1.jpg" alt="Project One" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Project One</h3>
              <p className="text-gray-700 mb-4">A web application for managing tasks. Built with React and Node.js.</p>
              <a href="https://github.com/johndoe/project-one" className="text-blue-500">
                GitHub
              </a>
            </div>
            <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-4">
              <img src="project2.jpg" alt="Project Two" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Project Two</h3>
              <p className="text-gray-700 mb-4">An e-commerce platform. Built with Next.js and MongoDB.</p>
              <a href="https://github.com/johndoe/project-two" className="text-blue-500">
                GitHub
              </a>
            </div>
            <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-4">
              <img src="project3.jpg" alt="Project Three" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Project Three</h3>
              <p className="text-gray-700 mb-4">A social media app. Built with React Native and Firebase.</p>
              <a href="https://github.com/johndoe/project-three" className="text-blue-500">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center mt-8">
        <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/johndoe" className="text-gray-700 hover:text-black">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/johndoe" className="text-gray-700 hover:text-black">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/johndoe" className="text-gray-700 hover:text-black">
            <FaTwitter size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
