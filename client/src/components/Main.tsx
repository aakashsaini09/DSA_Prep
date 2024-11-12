
import { toast } from "@/hooks/use-toast";
import landing from '../assets/landing1.jpg'
import './Styling.css'
import { Link } from "react-router-dom";
export default function MainComp() {
  const url = 'https://silent-shout.netlify.com';
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(url)
    toast({description: "Link copied!"})
  };
    return (
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 className="text-80 text-center text-7xl px-14 font-bold text-white mb-6">
          Invite Honest Thoughts, No Names Attached
          </h1>
          <h2 className="text-2xl font-4 font-semibold px-28 pb-11 text-gray-700 text-center">
          Share your unique link to receive honest, anonymous feedback from friends and followers. No sign-ups, no identities—just real opinions.
          </h2>
          <div className="ml-6 text-center">
            <span
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline" >
              <div className="flex text-lg">
                <span onClick={copyLinkToClipboard} className="justify-center cursor-pointer">Invite Your Friends</span>
              </div>
      
            </span>
            <a
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <Link to={'/login'} className="justify-center">Get Start For Free</Link>
              </div>
            </a>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-cover object-center w-3/4 mb-10 shadow-md filter grayscale"
            alt="Placeholder Image"
            src={landing}
          ></img>
        </div>
        <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter font-serif text-center text-gray-200 lg:text-7xl md:text-6xl">
          Silent Shout
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Best platform to share your thoughts for particular person for free.
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg text-white">
                <i className="fa-solid fa-shield-halved mr-3"></i>Security & Privacy
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Your identity is safe with us. Messages are fully anonymous, and no personal data is shared. Feel confident in your privacy.
            </p>
          </div>
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg text-white">
                <i className="fa-regular fa-heart mr-3"></i>Respectful Feedback Only
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Our platform is built for honest, constructive feedback—harassment and harmful language have no place here.
            </p>
          </div>
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg text-white">
                <i className="fa-solid fa-share mr-3"></i>Effortless Sharing
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Share your link on social media or directly with friends. No sign-ups required for message senders, making it easy for everyone to connect.
            </p>
          </div>
          <div className="ktq4">
            <h3 className="pt-3 font-semibold text-lg text-white">
                <i className="fa-regular fa-face-smile mr-3"></i>Simple & Insightful
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            View all your feedback in one place. Log in anytime to see what others have to say and gain real insights.
            </p>
          </div>
        </div>


        {/* <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <img src="https://nine4.app/images/nine4-3.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula faucibus
              urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
              rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
              odio.
            </p>
          </div>
          <div className="ktq4">
            <img src="https://nine4.app/images/nine4-3.png"></img>
            <h3 className="pt-3 font-semibold text-lg text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
              Nullam vehicula, libero at euismod tristique, neque ligula faucibus
              urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
              rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
              odio.
            </p>
          </div>
        </div> */}
        <section className="relative pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl font-bold text-white">
                Subscribe to our newsletter
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-200">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autoComplete="email"
                className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <a
                className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span className="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }