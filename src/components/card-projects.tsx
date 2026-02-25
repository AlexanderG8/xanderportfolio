import { useState } from 'react';

import { Button, Card, CardBody, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, Tooltip, useDisclosure } from '@nextui-org/react';
import { Box, ImageList, ImageListItem } from '@mui/material';

import { GithubIcon } from '@/components/icons';

import { ProjectData } from '@/types';

const CardProjects = ({ project }: { project: ProjectData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    onOpen();
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <>
      <Card className="ml-12 border-none bg-background/60 dark:bg-default-100/50 max-w-[100%]" shadow="sm">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Box sx={{ height: 300, overflowY: 'scroll', overflowX: 'none' }}>
                <ImageList cols={1} gap={8} variant="masonry">
                  {project.images.map((item, index) => (
                    <ImageListItem
                      key={`${item.img}-${index}`}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        alt={item.title}
                        className="object-cover transition-opacity hover:opacity-80"
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
                {project.githubUrl && (
                  <Tooltip content="Ver repositorio en GitHub">
                    <Link isExternal href={project.githubUrl}>
                      <GithubIcon className="text-foreground/70 hover:text-foreground transition-colors" size={22} />
                    </Link>
                  </Tooltip>
                )}
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

      <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
        <ModalContent>
          <ModalHeader className="text-foreground/90">
            {project.images[selectedIndex]?.title}
          </ModalHeader>
          <ModalBody className="flex flex-col items-center pb-6">
            <img
              alt={project.images[selectedIndex]?.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg"
              src={project.images[selectedIndex]?.img}
            />
            {project.images.length > 1 && (
              <div className="flex items-center gap-4 mt-4">
                <Button size="sm" variant="flat" onPress={handlePrev}>
                  ← Anterior
                </Button>
                <span className="text-sm text-foreground/60">
                  {selectedIndex + 1} / {project.images.length}
                </span>
                <Button size="sm" variant="flat" onPress={handleNext}>
                  Siguiente →
                </Button>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardProjects;
