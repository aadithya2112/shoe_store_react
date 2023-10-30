import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from '../constants';
import { bigShoe1 } from "../assets/images";
import { bigShoe2 } from "../assets/images";
import { bigShoe3 } from "../assets/images";
// import { person_running } from "../assets/images";

const Hero = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container xl:px-20'
    >
    
    <div 
    className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          The New Arrival
        </span>
        <br />
        <span className="text-coral-red inline-block mt-3">Swyftly</span>
        Shoes
      </h1>

      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish swyftly
          arrivals, quality comfort,
          and innovation for your
          active life.</p>
        <Button label="Show now"
        iconURL={arrowRight} />
        

      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
      {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
      </div>
    </div>

    <div className='relative flex-1 flex justify-center items-center'>
      <img src={ bigShoe3 } alt="Shoe Collection"
        width={500}
        height={392}
        className='object-contain relative z-10'/>
    </div>

    </section>
  )
}

export default Hero