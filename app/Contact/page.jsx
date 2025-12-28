import { FaEnvelope, FaGithub, FaIcons, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      
      {/* Top Contact Info Box */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200] h-[180] p-8 border border-gray-200 rounded-lg flex flex-col justify-center items-center text-center">
          <h1 className="text-gray-900 text-4xl mb-2">Contact Us</h1>
          <p className="text-sm text-gray-500 max-w-[900px]">
            We’d love to hear from you! If you have any questions, feedback, or need support, feel free to contact us.
            Our team is always ready to help and will get back to you as soon as possible.
            You can reach us anytime via phone or email.
          </p>
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="w-[1200] h-[400] mt-8 flex flex-row place-items-center justify-center items-center border border-gray-200 rounded-lg gap-x-6 gap-y-3">
        <div className="p-4 m-4 w-[400] h-[300] flex flex-col place-items-center justify-center border border-gray-200 rounded-lg"> 
            <input 
            className="h-10 w-full border border-gray-400 text-gray-900 rounded-lg p-4 m-4"
            type="text"
            placeholder="Full name "
            />
            <input 
            className="h-10 w-full border border-gray-400 text-gray-900 rounded-lg p-4 m-4"
            type="text"
            placeholder="Email "
            />
            <button
            className="h-14 w-full border text-white rounded-lg p-4 m-4 bg-green-700 hover:bg-green-600 hover:text-amber-100"
            >
                Send 
            </button>
        </div>
        <div className="p-4 m-4 w-[800] border border-gray-200 rounded-lg ">
            <p
            className="text-sm text-gray-500 text-center mb-4"
            >You can also reach out to me on GitHub, LinkedIn, or via email for any collaboration, questions, or support. I’d be happy to connect with you.</p>
            
            <div className="p-4 m-4 w-full h-full flex flex-wrap justify-center gap-x-6 gap-y-3">

            <div className="w-[300] h-[80] text-sm border border-gray-200 rounded-lg gap-6 flex justify-center items-center gap-3 px-4 hover:border-gray-400">
                <h1><FaEnvelope /></h1>
                <p>sadafimteyaz97@gmail.com</p>
            </div>

            <div className="w-[300] h-[80] text-sm border border-gray-200 rounded-lg gap-6 flex justify-center items-center gap-3 px-4 hover:border-gray-400">
                <h1><FaPhone /></h1>
                <p>+91 9142581206</p>
            </div>

            <div className="w-[300] h-[80] text-sm border border-gray-200 rounded-lg gap-6 flex justify-center items-center gap-3 px-4 hover:border-gray-400">
                <h1><FaGithub /></h1>
                <p>sadafimteyaz374</p>
            </div>

            <div className="w-[300] h-[80] text-sm border border-gray-200 rounded-lg gap-6 flex justify-center items-center gap-3 px-4 hover:border-gray-400">
                <h1><FaLinkedin /></h1>
                <p>sadaf-imteyaz</p>
            </div>
            </div>
        </div>
      </div>

    </div>
  );
}
