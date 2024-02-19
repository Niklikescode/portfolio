import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I'd love to hear from you. <br />
          <span className="underline decoration-orange-400/50">Lets Talk!</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+447931147153</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>niklikescode@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Berkshire, United Kingdom</p>
          </div>
        </div>

<form className="flex flex-col space-y-2 w-fit mx-auto">
  <div className="flex space-x-2">
    <input className="contactInput" type="text" placeholder="Name" /> <input className="contactInput" type="email" placeholder="Email"/>
  </div>
<input className="contactInput" type="text" placeholder="Subject"/>
<textarea className="contactInput" placeholder="Message"/>
<button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>

</form>

      </div>
    </div>
  );
}

export default ContactMe;
