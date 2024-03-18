import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:niklikescode@gmail.com?subject=${formData.subject} & body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4">
        Contact
      </h3>

      <div className="flex flex-col space-y-7">
        <h4 className="text-2xl lg:text-4xl mt-16 font-semibold text-center">
          I&apos;d love to hear from you. <br />
          <span className="underline decoration-orange-400/50">Lets Talk!</span>
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p>+447931147153</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p>niklikescode@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p>London, United Kingdom</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-2 w-full"
        >
          
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput w-full px-4 py-2 space-y-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Name"
            
            />{" "}
            <input
              {...register("email")}
              className="contactInput w-full px-4 py-2 space-y-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput w-full px-4 py-2 space-y-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput w-full px-4 py-8 space-y-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-1 px-5 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
        
        
      </div>
    </div>
  );
}

export default dynamic (() => Promise.resolve(ContactMe), {ssr: false})