import { Link, Avatar, Chip } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import { TypeAnimation } from 'react-type-animation';

import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';
import { GithubIcon, LinkedInIcon } from '@/components/icons';

const PersonalData = () => {
  return (
    <>
      <div className="m-5 mb-0 inline-block max-lg text-left justify-center">
        <div className="flex gap-5 items-center mb-5">
          <Avatar
            isBordered
            className="w-20 h-20 text-large"
            src="../assets/images/me.jpg"
          />
          <Chip
            classNames={{
              base: 'bg-gradient-to-br from-indigo-500 to-pink-400 border-white/50 shadow-pink-300/50',
              content: 'drop-shadow shadow-black text-white'
            }}
            size="md"
            variant="shadow"
          >
            Disponible para trabajar
          </Chip>
        </div>
        <div>
          <span className={title()}>Hola,&nbsp;</span>
          <span className={title()}>soy Alexander Gomez</span>
          <br />
          <span>
            <TypeAnimation
              className={title({ color: 'violet', fontStyle: 'italic', weight: 'bold', class: 'pr-1' })}
              cursor={false}
              repeat={Infinity}
              sequence={['Developer Full Stack', 5000]}
              wrapper="span"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mb-2 mr-5 ml-5">
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.linkedin}>
          <LinkedInIcon />
          Linkedin / Alexander Gomez
        </Link>
        <Link isExternal className={buttonStyles({ variant: 'bordered', radius: 'full' })} href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub / AlexanderG8
        </Link>
      </div>
    </>
  );
};

export default PersonalData;
