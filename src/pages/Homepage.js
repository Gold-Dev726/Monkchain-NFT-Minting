// material
import { styled, alpha } from "@mui/material/styles";
import {
  Stack,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Icon,
  Hidden,
} from "@mui/material";
import IconWrapper from "components/IconWrapper";
// import trendingUpFill from "@mui/icons-material/home"
// components
import Page from "../components/Page";
import SvgIconStyle from "components/SvgIconStyle";
import {
  UTILITIES,
  ROADMAPS,
  FAQS,
  TEAMS,
  ALPHA_UTILITIES,
} from "./HomepageTexts";

// ----------------------------------------------------------------------

export default function Homepage() {
  return (
    <Page>
      <Container maxWidth="lg">
        <Stack>
          <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 5 }}>
            <Stack flex={1} alignItems="flex-start">
              <Typography variant="h1">NEXT- GENERATION</Typography>
              <br />
              <Typography variant="h1">Dynamic NFT's</Typography>
              <Typography color="text.secondary" fontSize={21} sx={{ mt: 2 }}>
                MonkChains is a Next-Generation NFT collection of 4988
                video-animated 3D monks living in a parallel digital universe.
              </Typography>
              <Stack
                alignItems={{ xs: "center", md: "inherit" }}
                sx={{ width: 1 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: { xs: 5, md: 10 },
                    width: 200,
                    height: 60,
                    borderRadius: "4px",
                    fontSize: 22,
                  }}
                >
                  MINT SOON
                </Button>
              </Stack>
            </Stack>

            <Stack>
              <Box
                component="img"
                src="/images/hero.png"
                sx={{ width: 1, mr: { xs: 0, md: -2 }, mt: { xs: 5, md: 0 } }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Hidden lgDown>
          <Stack sx={{ py: 10 }} id="about">
            <Typography variant="h2" sx={{ mb: 3 }}>
              ABOUT THE COLLECTION
            </Typography>
            <Typography color="text.secondary" fontSize={24} paragraph>
              Each Monk is unique and 100% handmade with more than 70 different
              traits. The whole collection is exported offline, not
              programmatically created! Every single layer took weeks to
              complete. We've put great effort into making every single unique
              Monk.
            </Typography>
            <br />
            <Typography color="text.secondary" fontSize={24} paragraph>
              A well-known art designer designed the whole collection who made
              hundreds of designs & artworks for the most prominent music record
              labels and artists such as Sony Music, Spinnin' Records, Universal
              Music, Warner Music, and many more.
            </Typography>
          </Stack>
        </Hidden>
        <Hidden lgUp>
          <Stack sx={{ py: 10 }} id="about">
            <Typography align="center" variant="h2" sx={{ mb: 3 }}>
              ABOUT THE COLLECTION
            </Typography>
            <Typography
              align="center"
              color="text.secondary"
              fontSize={24}
              paragraph
            >
              Each Monk is unique and 100% handmade with more than 70 different
              traits. The whole collection is exported offline, not
              programmatically created! Every single layer took weeks to
              complete. We've put great effort into making every single unique
              Monk.
            </Typography>
            <br />
            <Typography
              align="center"
              color="text.secondary"
              fontSize={24}
              paragraph
            >
              A well-known art designer designed the whole collection who made
              hundreds of designs & artworks for the most prominent music record
              labels and artists such as Sony Music, Spinnin' Records, Universal
              Music, Warner Music, and many more.
            </Typography>
          </Stack>
        </Hidden>

        <Stack sx={{ py: { xs: 5, md: 10 } }}>
          {/* <Typography variant="h2">MONKCHAINS</Typography> */}
          <Box component="img" src="/images/monkchain.png" sx={{ width: 1 }} />
        </Stack>

        <Stack alignItems="center" sx={{ py: 10 }} id="utilities">
          <Typography variant="h2" sx={{ mb: 5 }}>
            UTILITIES
          </Typography>
          <Grid container columnSpacing={10} rowSpacing={5}>
            {UTILITIES.map((item, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <Stack alignItems="center">
                  <IconWrapper color={item.color} icon={item.icon} />
                  <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    align="center"
                    fontSize={20}
                    color="text.secondary"
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Hidden lgDown>
          <Stack sx={{ py: 10 }} id="roadmap">
            <Typography align="center" variant="h2" sx={{ mb: 5 }}>
              ROADMAP
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row">
                <Stack spacing={3}>
                  {ROADMAPS.map((item, index) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={5}
                    >
                      <Stack direction="row" alignItems="center" spacing={3}>
                        <SvgIconStyle
                          src="/images/icons/caret_right.png"
                          sx={{ width: 32, height: 32 }}
                        />
                        <Typography variant="h5">{item.title}</Typography>
                      </Stack>

                      <Box
                        sx={{ width: 120, borderBottom: "1px solid white" }}
                      />
                    </Stack>
                  ))}
                </Stack>
                <Box sx={{ width: "1px", bgcolor: "white" }} />
              </Stack>
              <Stack alignItems="center">
                <Box component="img" src="/images/monk-logo.png" />
                {/* <Typography variant="h3" sx={{ mt: -3 }}>
                  MONKCHAINS
                </Typography> */}
              </Stack>
            </Stack>
            <Typography variant="h4" sx={{ mt: 4 }}>
              Roadmap v2.0: TBA
            </Typography>
          </Stack>
        </Hidden>

        <Hidden lgUp>
          <Stack sx={{ py: 10 }} id="roadmap">
            <Typography align="center" variant="h2" sx={{ mb: 5 }}>
              ROADMAP
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row">
                <Stack component="ul" spacing={3} sx={{ ml: -5 }}>
                  {ROADMAPS.map((item, index) => (
                    <Stack alignItems="center">
                      <Typography component="li" variant="h5">
                        {item.title}
                      </Typography>
                    </Stack>
                  ))}
                  <Typography align="center" variant="h5">
                    Roadmap v2.0: TBA
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Box
                  component="img"
                  src="/images/monk-logo.png"
                  sx={{ width: 120 }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Hidden>

        <Stack sx={{ py: 10 }} id="team">
          <Typography align="center" variant="h2">
            TEAM
          </Typography>
          <Stack direction="row" justifyContent="center" flexWrap="wrap">
            {TEAMS.map((item, index) => (
              <Stack alignItems="center" key={index} sx={{ m: 5 }}>
                <Box
                  component="img"
                  src={`/images/teams/${index + 1}.png`}
                  sx={{ width: { xs: 0.8, md: 1 } }}
                />
                <Typography variant="h5" fontSize={24} sx={{ mt: 2, mb: 1 }}>
                  {item.name}
                </Typography>
                <Typography color="text.secondary" fontStyle="italic">
                  {item.role}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Hidden lgDown>
          <Stack sx={{ py: 10 }} id="alpha">
            <Stack direction={{ xs: "column", md: "row" }} sx={{ mt: 5 }}>
              <Stack alignItems="flex-start" spacing={5}>
                <Typography variant="h2">ALPHA COLLECTION</Typography>
                <Typography color="text.secondary">
                  Alpha Monks is a limited collection of 20 dynamic Alpha Monks
                  living in a parallel digital universe.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://opensea.io/collection/alpha-monks-by-monkchains"
                  target="_blank"
                >
                  Buy on OpenSea
                </Button>
                <Typography>Alpha Utilities</Typography>
                <Typography component="ul" sx={{ pl: 1 }}>
                  {ALPHA_UTILITIES.map((item, index) => (
                    <Typography
                      component="li"
                      color="text.secondary"
                      key={index}
                      sx={{ m: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Typography>
              </Stack>

              <Stack>
                <Box component="img" src="/images/alpha.png" sx={{ mr: -2 }} />
              </Stack>
            </Stack>
          </Stack>
        </Hidden>

        <Hidden lgUp>
          <Stack sx={{ py: 10 }} id="alpha">
            <Stack alignItems="center" spacing={5}>
              <Typography variant="h2">ALPHA COLLECTION</Typography>
              <Typography align="center" color="text.secondary">
                Alpha Monks is a limited collection of 20 dynamic Alpha Monks
                living in a parallel digital universe
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://opensea.io/collection/alpha-monks-by-monkchains"
                target="_blank"
              >
                Buy on OpenSea
              </Button>
              <Box
                component="img"
                src="/images/alpha.png"
                sx={{ width: 0.9 }}
              />
            </Stack>
            <Stack sx={{ mt: 3 }} spacing={2}>
              <Typography variant="h6">Alpha Utilities</Typography>
              <Typography component="ul" sx={{ pl: 1 }}>
                {ALPHA_UTILITIES.map((item, index) => (
                  <Typography
                    component="li"
                    color="text.secondary"
                    key={index}
                    sx={{ m: 2 }}
                  >
                    {item}
                  </Typography>
                ))}
              </Typography>
            </Stack>
          </Stack>
        </Hidden>

        <Stack alignItems="center" spacing={5} sx={{ py: 10 }} id="faq">
          <Typography variant="h2">F.A.Q.</Typography>
          <Stack spacing={5} sx={{ maxWidth: 500 }}>
            {FAQS.map((item, index) => (
              <Stack alignItems="center" key={index} spacing={3}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography align="center" color="text.secondary">
                  {item.answer}
                </Typography>
              </Stack>
            ))}
            <Stack alignItems="center" spacing={3}>
              <Typography variant="h4">
                What Will Be The Minting Price?
              </Typography>
              <Typography align="center" color="text.secondary">
                The O.G. private sale minting price is 0.065 ETH.
                <br /> The Whitelist pre-sale minting price is 0.088 ETH.
                <br /> The public sale minting price is 0.1
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Page>
  );
}
