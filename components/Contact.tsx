import { useLanyard } from "@/hooks/useLanyard";
import { Button, Container, Skeleton, Typography } from "@mui/material";
import { ContactCard } from "./Card/ContactCard";

export const Contact = () => {
    const { data: SWRLanyard, isLoading, isError } = useLanyard();

    return (
        <Container fixed className="flex flex-col gap-5 px-5 pt-10 md:px-40">
            <Typography className="font-sans text-3xl font-semibold">
                Contacts
            </Typography>
            <div className="grid gap-5">
                {isLoading || isError
                    ? new Array(5).fill([]).map((_, i) => (
                          <Button
                              key={i}
                              color="inherit"
                              disabled
                              className="w-full items-center gap-5 rounded-md border-none py-2 px-3 normal-case shadow-md"
                          >
                              <Skeleton
                                  variant="circular"
                                  animation="wave"
                                  className="aspect-square h-auto w-12"
                              />
                              <div className="flex w-full items-center justify-between">
                                  <Skeleton
                                      variant="text"
                                      animation="wave"
                                      className="w-1/2"
                                  />
                                  <Skeleton
                                      variant="rounded"
                                      animation="wave"
                                      className="aspect-square h-auto w-6"
                                  />
                              </div>
                          </Button>
                      ))
                    : [...Object.keys(SWRLanyard.data.kv), "discord"].map(
                          item => (
                              <ContactCard
                                  key={item}
                                  item={item}
                                  SWRLanyard={SWRLanyard}
                              />
                          )
                      )}
            </div>
        </Container>
    );
};
