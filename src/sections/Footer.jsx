import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-center items-center gap-5'>
        {socialMedia.map((icon) => (
          <div
            className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
            key={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} width={24} height={24} />
          </div>
        ))}
      </div>
      {/* <div className='flex justify-center items-center mt-8'>
        <p className='font-montserrat cursor-pointer text-white'>
          Get in Touch
        </p>
      </div> */}
      <div className='flex justify-center items-center mt-8'>
        <p className='font-montserrat cursor-pointer text-white'>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;