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
                  Te contaré un poco sobre mí, soy <strong className="underline decoration-purple-500">desarrollador Full Stack</strong> con más de 4 años creando soluciones digitales.
                  Mi base viene del mundo <strong className="underline decoration-purple-500">.NET</strong>, donde aprendí a construir sistemas robustos y escalables,
                  pero hoy disfruto combinar esa solidez con la agilidad de <strong className="underline decoration-purple-500">React</strong>, <strong className="underline decoration-purple-500">Next.js</strong> y <strong className="underline decoration-purple-500">Node.js</strong>.

                  Me apasiona transformar ideas en herramientas que simplifiquen el día a día, automatizando procesos y
                  cuidando siempre la experiencia de quien las usa. Te invito a darte una vuelta por mi portafolio
                  para que veas cómo fusiono lo mejor de ambos mundos técnicos 😁
                </p>
              }
            />
          </div>
        </div>
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
                <ul className="list-disc list-inside space-y-1 text-medium text-foreground/80">
                  <li>Analizo requerimientos e implementé arquitectura de las apps web con <strong className="underline decoration-purple-500">MVC</strong>.</li>
                  <li>Diseño UML y desarrollé la base de datos para las nuevas apps de la empresa.</li>
                  <li>Creación y optimización de tablas y procedimientos almacenados con tablas temporales, cursores, vistas con <strong className="underline decoration-purple-500">SQL Server</strong>.</li>
                  <li>Desarrollo de servicios API web con <strong className="underline decoration-purple-500">ASP.NET Core</strong>, con arquitectura <strong className="underline decoration-purple-500">Repository</strong> y <strong className="underline decoration-purple-500">UnitOfWork</strong>.</li>
                  <li>Elaboro frontend & UI con <strong className="underline decoration-purple-500">Bootstrap</strong> y <strong className="underline decoration-purple-500">Jquery</strong>.</li>
                  <li>Analizo aplicaciones internas de la empresa para soporte a colaboradores</li>
                </ul>
              }
              content_company={'Alfredo Pimentel Sevilla S.A.C'}
              content_profetion={'Analista Programador'}
              content_time={'2024 - Actualidad'}
            />
            <CardWorkExperience
              content_body={
                <ul className="list-disc list-inside space-y-1 text-medium text-foreground/80">
                  <li>Analicé negocio e implementación de arquitecturas con <strong className="underline decoration-purple-500">MVC</strong>, <strong className="underline decoration-purple-500">.NET</strong> y <strong className="underline decoration-purple-500">Entity Framework</strong>.</li>
                  <li>Desarrollé e optimicé procedimientos almacenados con tablas temporales, cursores, views con <strong className="underline decoration-purple-500">SQL Server</strong>.</li>
                  <li>Elaboré servicios REST, web API.</li>
                  <li>Desarrollé reportes con Rotativa para <strong className="underline decoration-purple-500">ASP.NET CORE</strong>.</li>
                  <li>Implemente envio de correos con librería <strong className="underline decoration-purple-500">MailKit</strong>.</li>
                  <li>Desarrollé frontend con <strong className="underline decoration-purple-500">Razor</strong>, <strong className="underline decoration-purple-500">Boostrap</strong>, <strong className="underline decoration-purple-500">HTML</strong>, <strong className="underline decoration-purple-500">CSS</strong>, <strong className="underline decoration-purple-500">JavaScript</strong>.</li>
                  <li>Elaboré capacitación a nuevos integrantes del equipo de desarrollo.</li>
                  <li>Realicé soporte a clientes corporativos.</li>
                </ul>
              }
              content_company={'Myper Software'}
              content_profetion={'Analista Programador .NET'}
              content_time={'2021 - 2024'}
            />
          </div>
          <CardWorkExperience
            content_body={
              <ul className="list-disc list-inside space-y-1 text-medium text-foreground/80">
                <li>Participé en la implementé del servicio Ratifika a clientes corporativos.</li>
                <li>Realicé mantenimiento de la plataforma Ratifika.</li>
                <li>Efectué soporte a integraciones (<strong className="underline decoration-purple-500">TXT</strong> - <strong className="underline decoration-purple-500">BD</strong> - <strong className="underline decoration-purple-500">JSON</strong>) de los clientes.</li>
                <li>Elaboré soportes a los clientes corporativos.</li>
                <li>Analicé información en base de datos relacionales.</li>
              </ul>
            }
            content_company={'Eximio S.A.C'}
            content_profetion={'Analista de soporte e implementaciones'}
            content_time={'2021 - 2021'}
          />
        </div>
        <div className="container mt-12" title="proyectos">
          <div className="flex gap-4">
            <div className="flex flex-row justify-center">
              <h2 className="flex items-center text-2xl font-bold gap-x-3 text-black/80 dark:text-white">
                <Code fontSize={'medium'} />
                Mis Proyectos
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
    </DefaultLayout >
  );
}
