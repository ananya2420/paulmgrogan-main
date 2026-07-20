import Image from 'next/image';
import loveIcon from '../../../assets/love.png';
import awarenessIcon from '../../../assets/self-awareness.png';
import educationIcon from '../../../assets/education.png';
import communityIcon from '../../../assets/community.png';

const features = [
  {
    title: "LOVE",
    icon: loveIcon,
    text: "“You cannot bring greater freedom to the world without bringing greater love. You cannot bring greater freedom to the world without bringing greater reality on the problems of the world and a better understanding of what we’re all trying to do. And you can’t bring these results into existence at all in the absence of…LOVE.”"
  },
  {
    title: "SELF-AWARENESS",
    icon: awarenessIcon,
    text: "“Self-awareness is among the top leadership skills required from future leaders, according to Blanchard’s 2023 Trends Report. Yet the lack of it is a major contributor to the disfunction we see in government and society at large… Great Leadership Starts with Self-Awareness."
  },
  {
    title: "READING / EDUCATION & LITERACY",
    icon: educationIcon,
    text: "“If you do audio books in the car running errands you could tackle 2-4 books a week, plus 1-2 hours of reading will equal less than an hour a day, so you can digest 15-20 books a month. Helpful tips: Read first thing with or without coffee. Every car ride is the next book!” “I buy locally, promote regionally, think nationally, Live globally.”"
  },
  {
    title: "HOLDING REGULAR TOWN HALL MEETINGS",
    icon: communityIcon,
    text: "“As a dedicated political leader, I prioritize regular town hall meetings as a means to actively engage with our constituents and ensure their voices are heard. These meetings serve as a vital platform for residents to express concerns, propose ideas, and actively participate in shaping the policies that impact our community. By fostering open dialogue and collaboration, we aim to create a more responsive government that authentically represents the needs and aspirations of our constituents.”"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 mb-4">
                <Image src={feature.icon} alt={feature.title} width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;