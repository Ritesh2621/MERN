import React from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {

  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `G.H RAISONI INSTITUTE OF ENGINEERING AND TECHNOLOGY, PUNE`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+91 1234567890`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `riteshsuryawanshi2621@gmail.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: "Practice",
    },
  ];
  return (
    <>
      <div>
        {" "}
        <div className="md:w-96 mx-auto text-center my-24">
          <div className="text-2xl font-bold">Contact Me</div>
          <div className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem sint, magni magnam impedit dignissimos rerum
            modi error ex libero corrupti ab, numquam, eius maxime! Soluta quos
            culpa possimus tempora.
          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
           
                
                  <div  className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">Your name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered w-full  "
                    />
                  </div>
                  <div  className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email address"
                      className="input input-bordered w-full  "
                    />
                  </div>
                  <div  className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">Your Contact</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      className="input input-bordered w-full  "
                    />
                  </div>
                  <div  className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  "
                    />
                  </div>
              
            
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Contact;