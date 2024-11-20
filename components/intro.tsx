import Image from 'next/image'
import authorImage from '@/public/images/authors/si.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Shoeb.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software developer specialized in Backend development, Cloud & DevOps. I live in India. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
        <a 
          href='/shoeb_resume.pdf' 
          target="_blank"
          className="mt-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 py-1 w-full disabled:opacity-50"
        >
          View Resume
        </a>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}