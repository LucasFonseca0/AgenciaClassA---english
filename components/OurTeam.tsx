import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'David Ogilvy', role: 'Marketing Manager & Co-Founder', quote: '“Good advertising does not just circulate information. It penetrates the public mind with desires and belief.”', imageUrl: '/images/david.png' },
  { name: 'Bill Gates', role: 'Developer & Co-Founder', quote: '“Software is a great combination between artistry and engineering. Let’s innovate together and create impactful solutions.”', imageUrl: '/images/bill.png' },
  { name: 'Vincent van Gogh', role: 'Graphic Designer', quote: '“I transform ideas into visual masterpieces, bringing your brand’s vision to life with every stroke.”', imageUrl: '/images/vicent.png' },
  { name: 'Leonardo da Vinci', role: 'Social Media Art Designer', quote: '“Art is the queen of all sciences communicating knowledge to all generations. Let’s craft timeless content for the digital age.”', imageUrl: '/images/leonardo.png' }
];

export default function OurTeam() {
  return (
    <section className="relative" id='team'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Each member of our team brings a unique set of skills and experiences that enrich our work and culture.</p>
          </div>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8" data-aos="zoom-y-out">
            {teamMembers.map((member, index) => (
              <div key={index} className="max-w-md mx-auto">
                <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                  <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primary" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                      <Image className="relative rounded-full" src={member.imageUrl} width={96} height={96} alt={`Photo of ${member.name}`} />
                    </div>
                    <blockquote className="text-xl font-medium mb-4">
                      {member.quote}
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">{member.name}</cite>
                    <div className="text-gray-600">
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
