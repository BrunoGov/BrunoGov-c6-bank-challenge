import Head from "next/head";
import styles from "./styles.module.css";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Container } from "@/components/Container";
import { CustomButton as Button } from "@/components/Button";
import { Box } from "@mui/material";
import { CardProduct } from "@/components/CardProduct";
import Image from "next/image";

import TypesJobs from "@/assets/images/types_jobs.svg";
import CheckboxCircle from "@/assets/icons/checkbox_circle.svg";
import { CardReviews } from "@/components/CardReviews";
import { CardBlog } from "@/components/CardBlog";
import { CardContact } from "@/components/CardContact";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { ReviewProps } from "./Models";

export default function Home() {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://places.googleapis.com/v1/places/${process.env.NEXT_PUBLIC_KEY_PLACE}?fields=reviews&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`
      )
      .then((response) => {
        setReviews(response.data.reviews);
      });
  }, []);

  const handleWhatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5513997163591&text=Olá, você foi aprovado no processo seletivo do C6 Bank!`
    );
  };

  return (
    <>
      <Head>
        <title>Toldos Performs</title>
        <meta name="description" content="Site institucional ToldosPerforms" />
        <link rel="icon" href="../../public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <TopBar />
      <Box className={styles.container}>
        <Box className={styles.gradient}>
          <Container>
            <Header />
            <Box className={styles.contentInfos}>
              <h1 className={styles.title}>
                Toldos e Coberturas que atende
                <br />
                todas as suas necessidades
              </h1>
              <p className={styles.subtitle}>
                Oferecemos soluções de alta qualidade, resistentes ao sol e
                chuva, para
                <br />
                conforto e durabilidade em qualquer estação. Solicite seu
                orçamento!
              </p>
              <Button
                title="WhatsApp"
                type="contained"
                onClick={handleWhatsapp}
              />
            </Box>
          </Container>
        </Box>
        <Box className={styles.sectionProducts}>
          <Container>
            <Box className={styles.content}>
              <h2 className={styles.titleSectionProducts}>
                Toldos e Coberturas
              </h2>
            </Box>
            <Box className={styles.contentProducts}>
              <CardProduct
                title="Toldo Fixo"
                description="Durabilidade e Estilo para Todas as Estações"
              />
              <CardProduct
                title="Toldo Fixo"
                description="Durabilidade e Estilo para Todas as Estações"
              />
              <CardProduct
                title="Toldo Fixo"
                description="Durabilidade e Estilo para Todas as Estações"
              />
              <CardProduct
                title="Toldo Fixo"
                description="Durabilidade e Estilo para Todas as Estações"
              />
            </Box>
          </Container>
        </Box>
        <Box className={styles.sectionJobs}>
          <Container>
            <Box className={styles.contentJobs}>
              <Box className={styles.contentImageJobs}>
                <Image
                  src={TypesJobs}
                  alt="Imagem que mostra alguns trabalhos feitos"
                />
              </Box>
              <Box>
                <h2 className={styles.titleSectionJobs}>
                  Trabalhamos com todos os tipos de{" "}
                  <span className={styles.spanTitleSectionJobs}>
                    toldos e coberturas
                  </span>
                </h2>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Box className={styles.contentListJobs}>
                  <Image
                    src={CheckboxCircle}
                    alt="ícone de marcador de lista"
                  />
                  <p>Toldos Articulados</p>
                </Box>
                <Button title="Saiba Mais" type="contained" />
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className={styles.sectionAbout}>
          <Container>
            <Box className={styles.contentAbout}>
              <h2 className={styles.titleSectionAbout}>Toldos Performs</h2>
              <p className={styles.primaryDescription}>
                Lorem ipsum dolor sit amet consectetur. Tellus id tempus eu arcu
                et senectus pellentesque maecenas ac. Pellentesque tortor
                posuere faucibus vitae molestie risus. Facilisis fringilla
                viverra in pharetra non tellus odio tortor. Cursus semper massa
                dolor consequat suspendisse in et fermentum nullam.Lorem ipsum
                dolor sit amet consectetur. Tellus id tempus eu arcu et senectus
                pellentesque maecenas ac. Pellentesque tortor posuere faucibus
                vitae molestie risus. Facilisis fringilla viverra in pharetra
                non tellus odio tortor. Cursus semper massa dolor consequat
                suspendisse in et fermentum nullam.Lorem ipsum dolor sit amet
                consectetur. Tellus id tempus eu arcu et senectus pellentesque
                maecenas ac. Pellentesque tortor posuere faucibus vitae molestie
                risus. Facilisis fringilla viverra in pharetra non tellus odio
                tortor. Cursus semper massa dolor consequat suspendisse in et
                fermentum nullam.
              </p>
              <p className={styles.secondaryDescription}>
                Lorem ipsum dolor sit amet consectetur. Tellus id tempus eu arcu
                et senectus pellentesque maecenas ac. Pellentesque tortor
                posuere faucibus vitae molestie risus.
              </p>
              <Button
                title="WhatsApp"
                type="contained"
                onClick={handleWhatsapp}
              />
            </Box>
          </Container>
        </Box>
        <Box className={styles.sectionBlog}>
          <Container>
            <Box className={styles.contentBlog}>
              <h2 className={styles.titleSectionBlog}>Blog</h2>
              <Box className={styles.contentItemsBlog}>
                <CardBlog title="Toldo Fixo" />
                <CardBlog title="Toldo Fixo" />
                <CardBlog title="Toldo Fixo" />
                <CardBlog title="Toldo Fixo" />
              </Box>
            </Box>
          </Container>
        </Box>
        {reviews.length > 0 && (
          <Box className={styles.sectionReviews}>
            <Container>
              <Box className={styles.contentReviews}>
                <h2 className={styles.titleSectionReviews}>Avaliações</h2>
                <Box className={styles.contentItemsReviews}>
                  {reviews.map((item: ReviewProps, index) => (
                    <CardReviews
                      key={index}
                      name={item.authorAttribution.displayName}
                      dataReview={item.relativePublishTimeDescription}
                      rating={item.rating}
                      textReview={item.text.text}
                      image={item.authorAttribution.photoUri}
                    />
                  ))}
                </Box>
              </Box>
            </Container>
          </Box>
        )}
        <Box className={styles.sectionContact}>
          <Container>
            <Box className={styles.contentContact}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.6943909807442!2d-47.846745675278235!3d-24.49593923051533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c533869043aa13%3A0x51d555c924a4b895!2zRW1ww7NyaW8gZG9zIFDDo2Vz!5e0!3m2!1spt-BR!2sbr!4v1744857805759!5m2!1spt-BR!2sbr"
                height="450"
                loading="lazy"
                className={styles.iframe}
              ></iframe>
              <Box>
                <h2 className={styles.titleSectionContact}>
                  Solicite um orçamento rápido{" "}
                  <span className={styles.spanTitleSectionContact}>
                    sem compromisso
                  </span>
                </h2>
                <CardContact
                  typeCard="location"
                  title="Localização"
                  subtitle="Avenida 243, rua mário sergio cortella rua são joao, cep 343"
                />
                <CardContact
                  typeCard="phone"
                  title="Contato"
                  subtitle="(11) 3222-2222"
                />
                <CardContact
                  typeCard="clock"
                  title="Horário de Atendimento"
                  subtitle="Segunda a sexta-feira, das 9h às 18h"
                />
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
