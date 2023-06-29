import {
  ActionIcon,
  AppShell,
  BackgroundImage,
  Box,
  Card,
  Flex,
  Footer,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import bgMainDesktop from "@assets/bg-main-desktop.png";
import bgMainMobile from "@assets/bg-main-mobile.png";
import bgMainTablet from "@assets/bg-main-tablet.png";
import bgPattern1 from "@assets/bg-pattern-1.svg";
import bgPattern2 from "@assets/bg-pattern-2.svg";
import iconAndroid from "@assets/icon-android.svg";
import iconApple from "@assets/icon-apple.svg";
import { ReactComponent as IconFacebook } from "@assets/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "@assets/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "@assets/icon-twitter.svg";
import illustrationApp from "@assets/illustration-app.png";
import logo from "@assets/logo.svg";
import Button1 from "@components/Button1";
import Button2 from "@components/Button2";

const Home = () => {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  return (
    <BackgroundImage src={desktop ? bgMainDesktop : tablet ? bgMainTablet : bgMainMobile}>
      <Image
        maw={{ sm: 265, xl: 310 }}
        pos="absolute"
        top={-32}
        right={0}
        src={bgPattern1}
        alt="BgPattern1"
        display={{ base: "none", sm: "block" }}
      />
      <AppShell
        fixed={false}
        mt={{ base: 40, sm: 60 }}
        padding={0}
        footer={
          <Footer
            height="auto"
            withBorder={false}
            mt={{ base: 65, sm: 85, xl: 0 }}
            px={{ base: 24, sm: 40, xl: 165 }}
            mb={80}
          >
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              gap="xl"
            >
              <Flex direction={{ base: "column", xl: "row" }} gap="xl">
                <Image src={logo} width={145} alt="Logo" />
                <Text maw={370} ml={{ xl: 135 }}>
                  <Text>All rights reserved © Equalizer 2021</Text>
                  <Text>
                    Have any problems? Contact us via social media or email us at{" "}
                    <Text component="span" fw={700}>
                      equalizer@example.com
                    </Text>
                  </Text>
                </Text>
              </Flex>
              <Group>
                <ActionIcon
                  component={IconFacebook}
                  sx={theme => ({
                    fill: theme.colors.coarseWool[6],
                    "&:hover": { fill: theme.colors.freshSalmon[6] },
                  })}
                />
                <ActionIcon
                  component={IconInstagram}
                  sx={theme => ({
                    fill: theme.colors.coarseWool[6],
                    "&:hover": { fill: theme.colors.freshSalmon[6] },
                  })}
                />
                <ActionIcon
                  component={IconTwitter}
                  sx={theme => ({
                    fill: theme.colors.coarseWool[6],
                    "&:hover": { fill: theme.colors.freshSalmon[6] },
                  })}
                />
              </Group>
            </Flex>
          </Footer>
        }
      >
        <Box pl={{ base: 24, sm: 40, xl: 165 }}>
          <Image src={logo} width={145} alt="Logo" />
          <Stack>
            <Title
              order={1}
              c="coarseWool"
              fz={{ base: 40, sm: 64, xl: 88 }}
              mt={{ base: 65, sm: 95, xl: 125 }}
              pr={{ sm: 250, xl: 500 }}
            >
              We make your music sound extraordinary.
            </Title>
            <Text c="coarseWool" pr={{ sm: 300, xl: 500 }}>
              A system audio equalizer specifically designed for Android and iOS. Freely
              tune the way your music sounds with a professional grade parametric EQ &
              volume mixer. Control bass, mids, treble, gain control, reverb, and more!
            </Text>
          </Stack>
        </Box>

        <Box
          bg="coarseWool"
          sx={{ borderRadius: 12 }}
          mt={{ base: 170, sm: 250, xl: 310 }}
          mx={{ base: 0, sm: 40, xl: 165 }}
          mih={600}
        >
          <Group position="center" ml={{ xl: -200 }}>
            <Image
              src={illustrationApp}
              maw={{ base: 200, sm: 270 }}
              mt={{ base: -90, sm: -200 }}
              sx={{ zIndex: 1 }}
              alt="IllustrationApp"
            />
            <Image
              src={bgPattern2}
              maw={{ base: 280, xl: 310 }}
              alt="BgPattern2"
              pos="relative"
              bottom={{ base: 340, sm: 0 }}
              right={{ base: 0, sm: 120, xl: 0 }}
              top={{ xl: -50 }}
              left={{ xl: -100 }}
            />
          </Group>
        </Box>
        <Card
          bg="freshSalmon"
          c="coolDecember"
          maw={{ sm: 400, xl: 445 }}
          radius="lg"
          p={48}
          sx={{ zIndex: 2 }}
          mx="auto"
          mt={{ base: -370, sm: -410 }}
          left={{ sm: 100, xl: 250 }}
          top={{ xl: -100 }}
        >
          <Title order={2} fz={{ base: 32, xl: 40 }}>
            Premium EQ
          </Title>
          <Text mt={12} mb={36} fz={18}>
            Get expert-level control with a robust equalizer, volume mixer, and spatial
            audio. Take your listening experience to a whole new level and access all our
            incredible features!
          </Text>
          <Group align="center">
            <Text fz={65} fw={700}>
              $4
            </Text>
            <Text fz={20}>/ month</Text>
          </Group>
          <Stack>
            <Button1 label="iOS Download" iconSrc={iconApple} />
            <Button2 label="Android Download" iconSrc={iconAndroid} />
          </Stack>
        </Card>
      </AppShell>
    </BackgroundImage>
  );
};

export default Home;
