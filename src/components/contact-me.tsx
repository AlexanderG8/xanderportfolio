import { ForwardToInbox } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link
} from '@nextui-org/react';

const ContactMe = () => {

  return (
    <>
      <Card className="m-10 mt-0 max-w-[100%] border-none bg-background/60 dark:bg-default-100/50 max-w-[100%]" shadow="sm">
        <CardHeader className="flex gap-3 items-center justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold leading-none text-default-600">¿Tienes una idea?</h1>
          </div>
        </CardHeader>
        <CardBody className="items-center justify-center text-center text-md text-foreground/80">
          <p> Contáctame para hablar sobre tu proyecto.</p>
          <p>¡Hagámosla realidad juntos!</p>
        </CardBody>
        <CardFooter className="items-center justify-center">
          <Button
            as={Link}
            className="inline-flex items-center justify-center py-2 mb-5 px-4 md:py-1.5 text-white transition bg-sky-500 border border-sky-500 rounded-full dark:bg-sky-500 dark:text-white focus-visible:ring-sky-600/80 text-md hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 dark:hover:text-white group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:scale-105"
            color="secondary"
            href="mailto:mpalexanderg@outlook.com"
            rel="noreferrer"
            startContent={<ForwardToInbox />}
            target="_blank"
          >
            Contactar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContactMe;
