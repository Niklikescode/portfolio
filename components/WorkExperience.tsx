import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import dynamic from "next/dynamic";


type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-4">
        Experience
      </h3>
 
<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">

<ExperienceCard
  title="Software Developer"
  company="School of Code"
  image="soc2.png"
  description="Shortlisted from over 3000 applicants, I was chosen for School Of Code's 15th Cohort bootcamp alongside 89 successful candidates. This 16-week intensive bootcamp in Full-Stack Software Development enables career-ready proficiency in the following skillsets:

  Fundamentals of the Web: Building a strong foundation in web technologies, including HTML, CSS, and introductory JavaScript.
  Advanced JavaScript: Delving deeper into JavaScript, acquiring advanced programming skills through practical problem-solving.
  Back End Development: Proficiently using Node.js to grasp back-end development concepts, from server fundamentals to utilizing ExpressJS for production-ready services.
  APIs and Databases: Mastering the essential role of APIs in modern web development and gaining proficiency in database communication using SQL and PostgreSQL.
  Advanced Front End with React: Acquiring in-depth knowledge of React, a widely-used front-end JavaScript library for building impressive user interfaces.
  Cloud Hosting: Learning to leverage cloud infrastructure for hosting applications and services.
  Real-World Projects: Successfully completing key projects as well as creating and presenting weekly hackathons, including solving challenges for multinational corporations.
  Team Collaboration: Developing teamwork skills by working collaboratively with peers, and learning modern team dynamics in tech by implementing Agile methodologies.
  Networking and Profile Building: Recognising the importance of networking and building a professional network within the local and global tech community.
  " 
/>

<ExperienceCard
  title="Channel Brand Executive "
  company="HP / Poly"
  image="hp-poly2.png"
  description="
  Directly supporting Sales Account Managers, Inside Sales Managers and Sales Directors in SMB, Public Sector, Corporate and Global accounts across multiple Sales floors within the IT reseller and distributor, communication service and communication software channel, consisting of Computacenter, Insight, Misco, Softcat, BT, SCC, Bechtle, PCM, Unify, Westcon, Exertis, and Ingram Micro.

Managing the complete Video Conferencing, Contact Centre and Unified Communications headset portfolio and Poly's cloud based asset management software, by working closely with internal Inside Sales and Marketing teams and Corporate Account Managers to seek and develop opportunities within the Corporate, Public Sector and Enterprise arenas.

This is achieved through the continuous training of smarter-working enablers, new and frequent business price support, sales incentive schemes, sales floor call-out activity and technical support to Account Managers as well as direct customer engagement.

Representing the brand in partner networking events and industry exhibitions alongside Microsoft, Cisco, HP, Dell, Lenovo and vendors collaboratively working within the UC ecosystem.

Proven success in over-achieving 100% of quota quarterly since joining the company to date."
/>

<ExperienceCard
  title="Revenue & Performance Manager"
  company="Sixt Rent a Car"
  image="sixt.png"
  description="
  Regional Sales Performance responsibility for 10 car rental locations in the London area including flagship branches at London Airports. Stansted Airport, a major UK branch, exceeded branch target for the first time in 13 months through my consistent and progressive objective to support the sales agents and Branch Manager in increasing additional product revenue.

I drove sales by motivating and inspiring teams to improve daily performance with regular updates, incentives, individual tailored coaching (soft skills, approach and rapport building, identifying, recommending and closing) and company-wide recognition. I communicated daily incremental revenue in a top ranking format for my region, promoting transparency and encouraging Agents to make an active effort to be visible to the region, with praise being expressed to Agents from the Regional Manager. 

On a monthly basis, the RSPM team incentivised UK with prize draws on top sales. Notably a prepaid fuel incentive that I led and generated huge interest in via build up communication/posters/mail shots etc, UK saw a 300% increase in prepaid fuel revenue during the incentive period.

I developed and implemented the Performance Management process to the South, working with teams to identify performance issues and skill-gaps, and to coach and train as appropriate - seeing significant improvement in underachievers to perform above target consistently thereafter.

I delivered the induction of all new colleagues to the company Induction and Sales Training courses to all new Sales Agents and Branch Managers. I also trained new trainers as delegates in the company induction who will go on to deliver the course in their respective regions.

In November 2014, UK was awarded World number 1 for Incremental Revenue, received by myself and the RSPM team at the Sixt Annual World Conference in Davos, Switzerland."  
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
  description="In-house professional service support arm for Canon UK in the Jessops flagship. Managed the on-going development of staff training on all Canon solutions and services in digital print and photo-optic solutions up to Professional DSLR, and supported as a direct B2C information base for frequent and varied client consultations. I managed POS and Merchandising orders and negotiated store positioning, undergoing complete stock audits weekly. Responsible for the sales output of 30 accounts on a rotational basis consisting of Dixons Store Group, Jessops, Jacobs, John Lewis, Comet, Boots, London Camera Exchange and Photo Optix. I supported frequent high-profile promotional events, showcasing the Canon brand from implementation to execution."  
/>

<ExperienceCard
  title="
Store Manager"
  company="Jessops"
  image="jessops2.webp"
  description="Ensuring smooth and efficient running of the store, and providing direction and leadership for all store colleagues to maximize sales and profit, whilst delivering exceptional customer service within an agreed business plan.

  Achieving company targets by generating sales so that the store achieves profitable growth. Managing all Key Performance Indicators to minimum company expectations. Delivering high levels of customer service and ensure that all transactions were completed courteously and that any customer enquiries or issues were resolved swiftly. Managing colleague performance to ensure all colleagues have clear targets and are motivated to achieve them."  
/>



</div>


    </motion.div>
  );
}

export default WorkExperience;