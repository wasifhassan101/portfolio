import Image from 'next/image'
import wasif from '../public/wasif1.png'
import ls from "../public/lawscript.png"
import threads from "../public/threads.svg"
import gh from "../public/github.svg"
import ig from "../public/instagram.svg"
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className='bg-black'>
      <div className='relative h-full flex flex-col p-10'>
        <h1 className='text-yellow md:text-5xl sm:text-xl mt-20 font-roboto md:w-1/3 sm:w-full'>
          Wasif Hassan — Software Developer
        </h1>
        <div className='w-full flex md:flex-row sm:flex-col'>
          <div className={`flex md:w-1/3 translate-y-10 left-10 items-center justify-center`}>
            <Image className={`${styles.imageAnimate}`} src={wasif} />
          </div>
          <p className='md:w-2/3 sm:w-full md:p-12 sm:pt-12 font-roboto-light text-white md:text-lg sm:text-xs'>
            Hi, I'm Wasif. I'm a software developer with a unique blend of expertise in law and technology.
            While I began my career as a law student, my passion for coding led me to found LawScript, a startup that
            leverages AI to revolutionize legal research and writing in Pakistan. This venture serves as a testament to
            my ability to innovate and lead in the tech space.
            <br />
            <br />
            Although LawScript is one of my key projects, my interests are not confined to legal tech.
            I'm currently diving into the realms of AI and machine learning, aspiring to broaden my skill set
            and contribute to various sectors. Specializing in software development, I have the versatility and
            dedication to work on complex projects, from development to deployment.
            <br />
            <br />
            If you're looking for a committed professional who can elevate your technological solutions
            and has the capability to work in unison with multiple teams, I'm the person you're looking for.
            Let's connect to explore how we can collaborate on your next project.
          </p>
        </div>
      </div >
      <div className='flex items-center flex-col bg-light-gray md:p-32 sm:p-8 space-y-10'>
        <h1 className='text-black md:text-4xl sm:text-xl font-roboto-light'>
          <span className='font-roboto'>LawScript</span> — revolutionizing the legal landscape with AI-driven research and writing tools
          that blend efficiency, innovation, and precision.
        </h1>
        <div className='md:w-4/5 sm:w-full'>
          <Image className='rounded-2xl' src={ls} />
        </div>
        <p className='font-roboto-light text-black md:text-lg sm:text-xs text-justify'>
          As the CTO and co-founder of LawScript, I led the technical development of the platform
          from its inception on March 15 to its successful launch on September 11. Within this period,
          I faced and overcame a myriad of technical challenges, including the rapid development of the
          website in just one month. I made pivotal decisions on database architecture for both user data
          and AI models, and meticulously selected the most suitable AI algorithms for our legal research
          tools. I also managed the complex task of structuring, parsing, and cleaning caselaw and statutes,
          resolving intricate issues such as formatting and structural errors in those documents. While my
          primary role has been technical, I've collaborated closely with my co-founder to shape the business
          strategy, ensuring a well-rounded approach to our startup's growth. As of the launch, I have transitioned
          to building a team to further enhance and scale our platform.
        </p>
      </div>
      <div className='bg-black md:py-10 md:px-20 sm:p-10 flex items-center md:space-x-0 sm:space-x-10'>
        <div className='w-1/2 h-full'>
          <h1 className='text-yellow md:text-3xl sm:text-xl font-roboto'>Let's Connect!</h1>
          <div className='flex items-center h-20'>
            <Link target='_blank' href="https://github.com/wasifhassan101">
              <div className='w-12'>
                <Image src={gh} className='w-10 hover:w-12' />
              </div>
            </Link>
            <Link target='_blank' href='https://www.threads.net/@wasif_codes'>
              <div className='w-12'>
                <Image src={threads} className='w-7 hover:w-9' />
              </div>
            </Link>
            <Link target='_blank' href='https://instagram.com/wasif_codes?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr'>
              <div className='w-12'>
                <Image src={ig} className='w-7 hover:w-9' />
              </div>
            </Link>
          </div>
        </div>
        <div className='w-1/2 flex flex-col'>
          <h1 className='text-yellow font-roboto md:text-3xl sm:text-xl'>Want to hire?</h1>
          <div className='h-20 flex items-center'>
          <a href='mailto:wasifhassan101@gmail.com' >
            <button className='bg-white py-2 px-3 text-black font-roboto hover:bg-gray-500 rounded-full'>
              Send Email
            </button>
          </a>
          </div>
        </div>
      </div>
    </main >
  )
}
