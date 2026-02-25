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
                  pero hoy disfruto combinar esa solidez con la agilidad de <strong className="underline decoration-purple-500">React</strong>, <strong className="underline decoration-yellow-500">Next.js</strong> y <strong className="underline decoration-green-500">Node.js</strong>.

                  Me apasiona transformar ideas en herramientas que simplifiquen el día a día, automatizando procesos y
                  cuidando siempre la experiencia de quien las usa. Te invito a darte una vuelta por mi portafolio
                  para que veas cómo fusiono lo mejor de ambos mundos técnicos. ¡Espero que te guste lo que encuentres 😁!
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
                <p className="text-medium text-foreground/80">
                  Actualmente, participo en el ciclo de vida completo del desarrollo de las aplicaciones web de la empresa,
                  desde la toma de requerimientos y diseño arquitectónico (UML y MVC), hasta su implementación final.
                  Construyo servicios de API REST robustos y escalables utilizando <strong className="underline decoration-purple-500">ASP.NET Core</strong> {' '}
                  aplicando patrones de diseño como <strong className="underline decoration-purple-500">Repository</strong> y <strong className="underline decoration-purple-500">UnitOfWork</strong>.
                  Esto está respaldado por bases de datos relacionales en <strong className="underline decoration-red-500">SQL Server</strong>,
                  donde optimizo el rendimiento mediante procedimientos almacenados avanzados y tablas temporales.
                  Además, diseño interfaces funcionales con <strong className="underline decoration-blue-500">Bootstrap</strong> y <strong className="underline decoration-yellow-500">jQuery</strong>,
                  y desarrollo reportes estratégicos con <strong className="underline decoration-orange-500">Report Builder</strong>,
                  asegurando la mejora continua y el soporte técnico de los sistemas internos para potenciar la productividad operativa.
                </p>
              }
              content_company={'Alfredo Pimentel Sevilla S.A.C'}
              content_profetion={'Analista Programador'}
              content_time={'2024 - Actualidad'}
            />
            <CardWorkExperience
              content_body={
                <p className="text-medium text-foreground/80">
                  Como Analista Programador, lideré la optimización de lógica de negocio compleja en <strong className="underline decoration-red-500">SQL Server</strong>,
                  implementando soluciones avanzadas mediante procedimientos almacenados y estructuras de datos eficientes para el procesamiento de información.
                  Desarrollé APIs robustas y arquitecturas backend que conectan servicios críticos, complementando esto con la creación de interfaces dinámicas
                  en el frontend utilizando <strong className="underline decoration-yellow-500">JavaScript</strong> y <strong className="underline decoration-yellow-500">jQuery</strong>.
                  Además, garanticé la entrega de inteligencia de negocio mediante el diseño técnico de informes
                  detallados con <strong className="underline decoration-orange-500">Crystal Reports</strong>, cubriendo el ciclo completo de desarrollo desde la base de datos hasta la experiencia de usuario.
                </p>
              }
              content_company={'Simplifica S.A.C'}
              content_profetion={'Analista Programador'}
              content_time={'2023 - 2024'}
            />
            <CardWorkExperience
              content_body={
                <p className="text-medium text-foreground/80">
                  Como Analista Programador .NET, asumí la responsabilidad integral del análisis de requerimientos de negocio
                  y la definición de arquitecturas escalables bajo el patrón <strong className="underline decoration-purple-500">MVC</strong> y {' '}
                  <strong className="underline decoration-purple-500">Entity Framework</strong>. Desarrollé APIs REST de alto rendimiento
                  y la optimización de procesos en <strong className="underline decoration-red-500">SQL Server</strong>, implementando además soluciones especializadas como sistemas de mensajería automatizada
                  con <strong className="underline decoration-purple-500">MailKit</strong> y generación dinámica de documentos con {' '}
                  <strong className="underline decoration-purple-500">Rotativa</strong>. Más allá de la ejecución técnica en el stack de {' '}
                  <strong className="underline decoration-purple-500">ASP.NET Core</strong> y <strong className="underline decoration-purple-500">Razor</strong>,
                  actué como mentor técnico para la capacitación de nuevos integrantes del equipo y gestioné el soporte especializado para clientes corporativos,
                  asegurando la continuidad operativa de sistemas empresariales.
                </p>
              }
              content_company={'Myper Software'}
              content_profetion={'Analista Programador .NET'}
              content_time={'2021 - 2023'}
            />
          </div>
          <CardWorkExperience
            content_body={
              <p className="text-medium text-foreground/80">
                Me desempeñé como Analista de Soporte e Implementaciones, donde gestioné el despliegue y mantenimiento de la plataforma Ratifika para clientes corporativos.
                Me especialicé en asegurar la correcta integración de datos entre diversos formatos como <strong className="underline decoration-purple-500">JSON</strong>, {' '}
                <strong className="underline decoration-purple-500">TXT</strong> y bases de datos <strong className="underline decoration-red-500">SQL</strong>,
                garantizando la fluidez técnica entre los sistemas de los clientes y nuestra plataforma. Además de brindar soporte técnico especializado,
                realicé análisis de datos relacionales para resolver incidencias y optimizar el funcionamiento del servicio.
              </p>
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
