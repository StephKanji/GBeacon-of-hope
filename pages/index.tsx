import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectDescription from "@/components/Projectdescription";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import DonationForm from "@/components/Donationform";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Genancia Beacon of Hope | Empowering Education in East Africa</title>
        <meta
          name="description"
          content="A non-profit organization dedicated to improving education access for children in East Africa. Based in Brooklyn Park, Minnesota."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectDescription />
        <Gallery />
        <Testimonials />
        <DonationForm />
      </main>
      <Footer />
    </>
  );
}