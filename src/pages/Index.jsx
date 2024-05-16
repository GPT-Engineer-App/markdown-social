import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-roboto-mono">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-xl text-gray-600">Full Stack Developer</p>
      </header>
      <main className="w-full max-w-4xl px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li className="mb-2">
              <strong>Project One:</strong> A web application for managing tasks. Built with React and Node.js.
            </li>
            <li className="mb-2">
              <strong>Project Two:</strong> An e-commerce platform. Built with Next.js and MongoDB.
            </li>
            <li className="mb-2">
              <strong>Project Three:</strong> A social media app. Built with React Native and Firebase.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Feel free to reach out to me via email at{" "}
            <a href="mailto:john.doe@example.com" className="text-blue-500">
              john.doe@example.com
            </a>
            .
          </p>
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
