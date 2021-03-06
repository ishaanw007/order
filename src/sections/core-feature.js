/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
// import { BsFillBellFill } from "react-icons/bs";
import CoreFeatureThumb from "assets/coreFeature5.png";
import Briefcase from "assets/core-feature/briefcase.svg";
import Secure from "assets/core-feature/secure.svg";
import List from "components/list";

const data = {
  subTitle: "Be in full control from one platform",
  title: "Ensure a seamless post-purchase experience for all customers.",
  features: [
    {
      id: 1,
      imgSrc:
        "https://img.icons8.com/color/48/000000/appointment-reminders--v1.png",
      altText: "Automatic tracking information notification",
      title: "Automatic tracking information notification",
    },
    {
      id: 2,
      imgSrc:
        "https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-invoice-graphic-design-wanicon-flat-wanicon.png",
      altText: "Auto generated invoices",
      title: "Auto generated invoices",
    },
    {
      id: 3,
      imgSrc: "https://img.icons8.com/office/40/000000/contacts.png",
      altText: "Contact data management",
      title: "Contact data management",
    },
    {
      id: 4,
      imgSrc: "https://img.icons8.com/dusk/64/000000/discount-ticket.png",
      altText: "Price and quantity discount rules",
      title: "Price and quantity discount rules",
    },

    {
      id: 5,
      imgSrc: "https://img.icons8.com/fluency/48/000000/document-delivery.png",
      altText: "Customer profiles and shipping preferences",
      title: "Customer profiles and shipping preferences",
    },
    {
      id: 6,
      imgSrc: "https://img.icons8.com/color/48/000000/online-support.png",
      altText: "Customer support integrations",
      title: "Customer support integrations",
    },
    {
      id: 7,
      imgSrc:
        "https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-reports-basic-ui-elements-2.3-sbts2018-flat-sbts2018.png",
      altText: "Picklists & Reports",
      title: "Picklists & Reports",
    },
    {
      id: 8,
      imgSrc:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-permission-back-to-work-flaticons-lineal-color-flat-icons-2.png",
      altText: "User Permissions",
      title: "User Permissions",
    },
  ],
};

export default function CoreFeature() {
  return (
    // <section sx={styles.coreFeature}>
    <Container sx={styles.containerBox}>
      <Box sx={styles.thumbnail}>
        <Image src={CoreFeatureThumb} sx={styles.thumbnailImg} />
      </Box>
      <Box sx={styles.contentBox}>
        <Box sx={styles.headingTop}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
        </Box>

        <Grid gap="5px 0" columns={1} sx={styles.grid}>
          {data.features.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>

                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Container>
    // </section>
  );
}

const styles = {
  coreFeature: {
    // py: [0, null, null, 2, null, 7],
    // position: "relative",
    // "&::before": {
    //   position: "absolute",
    //   content: '""',
    //   top: ["auto", null, null, "40%"],
    //   bottom: ["100px", 0, null, "auto"],
    //   left: 0,
    //   background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
    //   height: [350, 550, "50%"],
    //   width: "50%",
    //   zIndex: -1,
    //   borderTopRightRadius: "50%",
    //   borderBottomRightRadius: "50%",
    //   transform: ["translateY(0)", null, null, "translateY(-50%)"],
    // },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: ["column", null, null, "row"],
    // ml: "100px",
    // width: "auto",
    // height: "1000px",
  },
  thumbnailImg: {
    height: "800px",
    width: "900px",
  },
  thumbnail: {
    // pl: [0, 5, 0, null, 7, 95],
    //  pr: [0, 5, null, null, null, 75, 95],
    // order: [2, null, null, 0],
    // height: "1000px",
    // mr: "100px",
    // height: "800px",
    // layout: "fill",
  },
  contentBox: {
    width: "35%",
    // pr: [0, null, "auto", null, null, 80],
    // pl: "auto",
    flexShrink: 0,
  },
  headingTop: {
    // pl: [0, null, null, null, "35px", null, "55px", 6],

    mb: "-15px",
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    p: "1px",
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },

  img: {
    width: ["40px", null, "45px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  img1: {
    // layout: "fill",
    objectFit: "contain",
    height: "652px",
    width: "100%",
    position: "relative",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

    title: {
      fontSize: 2,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      m: "18px",
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
