import { BusinessCenter, SentimentVerySatisfied, Code, MiscellaneousServices } from '@mui/icons-material';

import DefaultLayout from '@/layouts/default';
import CardWorkExperience from '@/components/card-work-experience';
import CardDevelopmentSkills from '@/components/card-development-skills';
import CardProjects from '@/components/card-projects';
import ContactMe from '@/components/contact-me';
import AboutMe from '@/components/about-me';
import { My_Stack } from '@/utils/icon-stack';
import PersonalData from '@/components/personal-data';
import { ProjectData } from '@/types';
import projectsData from '@/data/projects.json';

// Datos de proyectos importados desde JSON
const projects: ProjectData[] = projectsData;

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-left justify-center gap-4  md:py-10">
        <PersonalData />
        <div className="container" title="exp-laboral">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <BusinessCenter fontSize={'medium'} />
                Experiencia laboral
              </h2>
            </div>
          </div>
          <div className="container mt-4">
            <CardWorkExperience
              content_body={
                <p className="text-medium text-foreground/80">
                  Actualmente, contribuyo al desarrollo y mejora del sistema de gestión, soporte y administración de Facturación
                  Electrónica. Integro nuevas funcionalidades y un diseño atractivo para la mejora de la experiencia para los usuarios
                  actuales. Utilizamos <strong className="underline decoration-blue-500">React</strong> junto con{' '}
                  <strong className="underline decoration-blue-500">Next</strong> y{' '}
                  <strong className="underline decoration-cyan-500">Typescript</strong> para el Frontend, mientras que los servicios{' '}
                  <strong className="underline decoration-green-500">API REST</strong> están desarrollados en
                  <strong className="underline decoration-purple-500"> C# .NET</strong> y alojados en la nube de Microsoft Azure.
                </p>
              }
              content_company={'PanamaPAC Solutions and Services, S.A.'}
              content_profetion={'Desarrollador Frontend'}
              content_time={'Julio 2022 - Actualidad'}
            />
            <CardWorkExperience
              content_body={
                <p className="text-medium text-foreground/80">
                  Formé parte del desarrollo de proyectos web en distintas fases para empresas de diversos sectores, abarcando desde el
                  desarrollo inicial hasta el mantenimiento. También participé en la implementación de interfaces de usuario utilizando
                  tecnologías como <strong className="underline decoration-orange-500">HTML</strong>,{' '}
                  <strong className="underline decoration-cyan-500">CSS</strong> y{' '}
                  <strong className="underline decoration-yellow-500">JavaScript</strong>, desarrollé servicios API REST utilizando{' '}
                  <strong className="underline decoration-purple-500">C#</strong> y{' '}
                  <strong className="underline decoration-purple-500">.NET Core</strong>, y diseñé bases de datos con{' '}
                  <strong className="underline decoration-red-500">Microsoft SQL Server</strong>.
                </p>
              }
              content_company={'Diprocess.com'}
              content_profetion={'Desarrollador Júnior'}
              content_time={'2019 - 2020'}
            />
          </div>
        </div>
        <div className="container mt-12" title="sobre-mi">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <SentimentVerySatisfied fontSize={'medium'} />
                Sobre mí
              </h2>
            </div>
          </div>
          <div className="container mt-4">
            <AboutMe
              content_body={
                <p className="text-medium text-foreground/80">
                  Hola soy <strong className="font-bold"> Alexander Gómez</strong>, desarrollador full-stack con más de 3 años de experiencia construyendo aplicaciones web robustas y escalables. Mi trayectoria comenzó en el ecosistema de <strong className="text-purple-400">.NET</strong>, donde he desarrollado soluciones completas utilizando <strong className="text-purple-400">ASP.NET Core MVC, Razor Pages, APIs RESTful y SQL Server</strong>, creando sistemas que han optimizado procesos empresariales y mejorado significativamente la experiencia de los usuarios.
                  Actualmente, estoy expandiendo mis habilidades hacia el ecosistema moderno de <strong className="text-yellow-400">JavaScript</strong>, trabajando con tecnologías como <strong className="text-blue-400">TypeScript</strong>, <strong className="text-cyan-400">React</strong>, <strong className="text-red-400">Next JS</strong>, <strong className="text-green-400">Node JS</strong>, <strong className="text-orange-500">Express JS</strong>, <strong className="text-pink-500">Prisma</strong> y <strong className="text-blue-600">PostgreSQL</strong> con <strong className="text-green-500">NeonDB</strong>. Esta combinación me permite ofrecer soluciones versátiles que se adaptan a las necesidades específicas de cada proyecto.
                  Lo que me apasiona es transformar ideas en aplicaciones funcionales que realmente marquen la diferencia. No solo escribo código: creo herramientas que simplifican tareas complejas, automatizan procesos repetitivos y ofrecen experiencias de usuario intuitivas y fluidas. Mi enfoque está en la innovación y la eficiencia, siempre buscando ofrecer resultados que generen un impacto real.
                </p>
              }
            />
          </div>
        </div>
        <div className="container mt-12" title="proyectos">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <Code fontSize={'medium'} />
                Proyectos
              </h2>
            </div>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="container mt-4">
              <CardProjects project={project} />
            </div>
          ))}
        </div>
        <div className="container mt-12" title="habilidades">
          <div className="flex">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <MiscellaneousServices fontSize={'medium'} />
                Habilidades
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mt-12">
            <CardDevelopmentSkills skillStack={My_Stack.frontend} title={'Frontend'} />
            <CardDevelopmentSkills skillStack={My_Stack.backend} title={'Backend'} />
            <CardDevelopmentSkills skillStack={My_Stack.tools} title={'Herramientas'} />
            <CardDevelopmentSkills skillStack={My_Stack.learning} title={'Aprendiendo'} />
          </div>
        </div>
        <div className="container mt-12" title="contactame">
          <div className="flex items-center justify-center">
            <div className="flex flex-row">
              <h2 className="flex items-center items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">Contactame</h2>
            </div>
          </div>
          <div className="container mt-4">
            <ContactMe />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
