import { ContactCard } from "@/components/Card/ContactCard";
import { MyLayout } from "@/components/Layout";
import { useLanyard } from "@/hooks/useLanyard";
import { Button, Skeleton, Typography } from "@mui/material";

export default function MyContact() {
    const { data: SWRLanyard, isLoading, isError } = useLanyard();

    return (
        <MyLayout>
            <Typography className="text-center font-sans text-3xl font-bold dark:text-white/90">
                Contact
            </Typography>
            <div className="grid w-full gap-5 self-center md:max-w-md">
                {isLoading || isError
                    ? new Array(5).fill([]).map((_, i) => (
                          <Button
                              key={i}
                              color="inherit"
                              disabled
                              className="w-full items-center gap-5 rounded-md border-none px-3 py-2 normal-case shadow-md"
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
        </MyLayout>
    );
}
