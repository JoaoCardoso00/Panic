import { InferGetStaticPropsType, type NextPage } from "next";
import Head from "next/head";
import { projectsBucket } from "../lib/cosmic";

interface Project {
  title: string;
  company: string;
  company_logo: {
    url: string;
    imgix_url: string;
  };
  technologies: string[];
}

interface HomeProps {
  projects: Project[];
}

const Home = ({ projects }: HomeProps) => {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Panic</title>
        <meta
          name="description"
          content="Panic, Software development company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold">We are Panic</h1>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await projectsBucket.objects.find({ type: "projects" });

  const projects = data.objects.map((project: any) => {
    return {
      title: project.title,
      company: project.metadata.companyname,
      company_logo: project.metadata.companylogo,
      technologies: project.metadata.technologies,
    };
  });

  return {
    props: { projects },
    //* Revalidate every 24 hours
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
