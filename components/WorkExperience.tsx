import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-4">
        Experience
      </h3>
 
<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">

<ExperienceCard
  title="Software Developer"
  company="School of Code"
  image="soc2.png"
  description="Selected from a pool of 3000 applicants, I joined School Of Code's 15th Cohort
  bootcamp with 89 other successful candidates. This 16-week Full-Stack Software
  Development program covers fundamental web technologies, advanced JavaScript,
  back-end development with Node.js, API and database mastery, React for advanced
  front-end, cloud hosting, and real-world project completion, including weekly
  hackathons for multinational corporations. The curriculum emphasizes teamwork,
  Agile methodologies, and networking within the tech community.
  " 
/>

<ExperienceCard
  title="Channel Brand Executive "
  company="HP / Poly"
  image="hp-poly2.png"
  description="
  Directly supporting Sales Account Managers, Inside Sales Managers and Sales
  Directors in SMB, Public Sector, Corporate and Global accounts across multiple
  Sales floors within the IT reseller and distributor, communication service and
  communication software channel, consisting of Computacenter, Insight, Misco,
  Softcat, BT, SCC, Bechtle, PCM, Unify, Westcon, Exertis, and Ingram Micro.
  Managing the complete Video Conferencing, Contact Centre and Unified
  Communications headset portfolio, and Software as a Service through the continuous training of smarter-working enablers,
  new and frequent business price support, sales incentive schemes, sales floor
  call-out activity and technical support to Account Managers as well as direct
  customer engagement. "
/>

<ExperienceCard
  title="Revenue & Performance Manager"
  company="Sixt Rent a Car"
  image="sixt.png"
  description="
  Managed 10 London car rental locations, including flagship branches at London Airports. Boosted Stansted Airport's performance, surpassing targets after 13 months with a focus on enhancing sales agents' skills. Elevated St Pancras Station to the top-performing branch nationwide. Conducted weekly branch visits, coaching on sales techniques, customer service, and conflict resolution, resulting in a 5-10% increase in monthly sales ratios. Led company induction and sales training for new colleagues and managers, also training new trainers. Recognized for achieving World number 1 for Incremental Revenue at the Sixt Annual World Conference in Davos, Switzerland, November 2014. Adapted and developed training materials to align with business needs."  
/>

<ExperienceCard
  title="Regional Sales Manager"
  company="Netgear"
  image="netgear.png"
  description="Managing the Netgear Brand covering 120 accounts across the South East, consisting of Dixons Store Group (DSG), Maplin and Staples, increasing sales in my region by 40%. I solely developed the Netgear training content for DSG nationally, as well as conducting seasonal training workshops and road shows across the country. Typical account visits included training and technical support, sales skill-development and merchandising/stock negotiation. This included extensive use of the Team Haven reporting platform."  
/>

<ExperienceCard
  title="
Pro Series Imaging Specialist"
  company="Canon"
  image="canon.png"
  description="In-house professional service support arm for Canon UK in the Jessops flagship. Managed the on-going development of staff training on all Canon solutions and services in digital print and photo-optic solutions up to Professional DSLR, and supported as a direct B2C information base for frequent and varied client consultations. I managed POS and Merchandising orders and negotiated store positioning, undergoing complete stock audits on a weekly basis."  
/>



</div>


    </motion.div>
  );
}

export default WorkExperience;