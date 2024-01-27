import React from "react";
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroImageRight.module.css";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/sign-in");
  };

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Join us{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                every developer
              </Text>{" "}
              must helping each other
            </Title>

            <Text className={classes.description} mt={30}>
              More than 28 million people work as Software Developer in the
              world
            </Text>

            <Button
              onClick={handleNavigate}
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
