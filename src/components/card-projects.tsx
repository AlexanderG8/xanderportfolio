import { Card, CardBody, Image } from '@nextui-org/react';
import { Box, ImageList, ImageListItem } from '@mui/material';

import { ProjectData } from '@/types';

const CardProjects = ({ project }: { project: ProjectData }) => {
  return (
    <Card className="ml-12 border-none bg-background/60 dark:bg-default-100/50 max-w-[100%]" shadow="sm">
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Box sx={{ height: 300, overflowY: 'scroll', overflowX: 'none' }}>
              <ImageList cols={1} gap={8} variant="masonry">
                {project.images.map((item, index) => (
                  <ImageListItem key={`${item.img}-${index}`}>
                    <Image
                      alt={item.title}
                      className="object-cover"
                      loading="eager"
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/100">{project.title}</h3>
                <h1 className="text-small text-foreground/80">
                  <strong>Tecnologías:</strong> {project.technologies}
                </h1>
              </div>
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8 m-5">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <p className="text-medium text-foreground/80">{project.description}</p>
                </div>
              </div>
              <h1 className="text-medium font-medium mt-2">Caracteristicas:</h1>
              <ul className="list-inside list-disc text-foreground/90">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProjects;
