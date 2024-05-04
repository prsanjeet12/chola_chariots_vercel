import "./App.css";
import Logo from './assets/logo.svg'
import Driver from './assets/driver.svg'
import Passenger from './assets/passenger.svg'

function App() {
  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gradient-to-b
     from-purple-200
      to-pink-200
       h-full
      overflow-hidden
       flex flex-col
        items-center justify-center">
        <div className="text-center
         ">
        <img
     
        src={Logo}
        className="w-70 mr-60 lg:mr-0 lg:h-[172px] h-32"
        alt="Chola Logo"
      />
        </div>
    <div className="lg:flex">
    <div className="flex flex-col   mb-20 lg:mb-0 items-center justify-center">
  <img
    src={Passenger}
    className="w-auto h-[361px] lg:h-[461px]"
    alt="Passenger App"
  />
  <button
    className="bg-black hover:bg-violet-500 hover:scale-105 transition-transform duration-300 text-white font-bold py-2 px-4 rounded-lg w-[240px] flex-shrink-0"
    onClick={() =>
      redirectToURL(
        "https://drive.google.com/file/d/1VhsCNOTvs7Ne6zm0A7fjU91Sw7ovBmtg/view?usp=sharing"
      )
    }
  >
    <div className="text-[11px] font-sans">Download our</div>{" "}
    <div>Passenger App</div>
  </button>
</div>
<div className="flex flex-col items-center justify-center">
  <img
    src={Driver}
    className="w-auto h-[361px] lg:h-[461px]"
    alt="Driver App"
  />
  <button
    className="bg-black hover:bg-violet-500 hover:scale-105 transition-transform duration-300 text-white font-bold py-2 px-4 rounded-lg w-[240px] flex-shrink-0"
    onClick={() =>
      redirectToURL(
        "https://drive.google.com/file/d/1BvT_DKan_-2HJFw_6beNWZ4gSQX-xOaD/view?usp=sharing"
      )
    }
  >
    <div className="text-[14px] sans">Download our</div>{" "}
    <div>Driver App</div>
  </button>
</div>
    </div>
        
      <p className="text-center pr-5 
      pl-5 text-black font-bold lg:py-12
       mb-0 pt-[110px] m-auto">
        Please click the buttons above to download and install the respective
        <br />
        apps for passengers and drivers.
      </p>
     
      <div className="container px-2 py-20 mx-auto">
  <div className="bg-white mr-2 p-9 rounded-lg shadow-md text-start
   text-black font-bold ">
    <h2 className="text-xl  text-center mb-4">App Download Instructions:</h2>
    <ol className="list-disc pl-6">
      <li>In your Android device's settings, navigate to either "Security" or "Privacy," then toggle the option to allow installation from unknown sources.</li>
      <li>Download the APK file from the provided link or a trusted source.</li>
      <li>Use your device's file manager to locate the downloaded APK file, then tap on it to start the installation process. Follow the on-screen prompts to complete the installation.</li>
    </ol>
  </div>
</div>
    </div>
  );
}

export default App;