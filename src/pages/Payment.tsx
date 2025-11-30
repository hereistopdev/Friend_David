import {
  Avatar,
  Box,
  Card,
  Divider,
  Stack,
  Typography,
  Input,
  IconButton,
} from "@mui/joy";
import { useState } from "react";
import { TbWallet, TbCopy, TbCheck } from "react-icons/tb";
import { SiEthereum, SiBinance, SiTron } from "react-icons/si";
import details from "@/assets/Details";
import Meta from "@/components/Meta";
import { useMobileMode } from "@/components/Responsive";

interface PaymentMethod {
  name: string;
  icon: JSX.Element;
  address: string;
  color: "primary" | "success" | "warning" | "danger" | "neutral";
}

export default function Payment() {
  const mobile = useMobileMode();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const paymentMethods: PaymentMethod[] = [
    {
      name: "ERC20",
      icon: <SiEthereum />,
      address: details.payment.erc20,
      color: "primary",
    },
    {
      name: "BEP20",
      icon: <SiBinance />,
      address: details.payment.bep20,
      color: "warning",
    },
    {
      name: "TRC20",
      icon: <SiTron />,
      address: details.payment.trc20,
      color: "success",
    },
  ].filter((method) => method.address); // Only show methods with addresses

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <Meta
        title={`Payment Info - ${details.name.first} ${details.name.last}`}
      />
      <Stack
        alignItems="center"
        sx={{
          width: "100vw",
          paddingTop: "var(--nav-safe-area-inset-top)",
          paddingBottom: `calc(var(--nav-safe-area-inset-bottom) + 4rem)`,
          paddingLeft: "var(--nav-safe-area-inset-left)",
        }}
      >
        <Box component="div" maxWidth="65em">
          <Stack
            paddingX={mobile ? 3 : 12}
            paddingY={mobile ? 5 : 6}
            gap={3}
            width="100%"
            height="100%"
          >
            <Stack component="header" gap={0}>
              <Typography level="h2" fontWeight="xl">
                Payment Information
              </Typography>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="text.secondary"
                marginBottom={0.5}
              >
                Wallet addresses for payments
              </Typography>
            </Stack>

            <Box
              component="section"
              sx={{
                gap: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={
                    <Avatar
                      size="sm"
                      alt="Payment"
                      sx={{
                        borderRadius: ".5rem",
                        height: "1.75rem",
                        width: "1.75rem",
                      }}
                    >
                      <TbWallet />
                    </Avatar>
                  }
                  slotProps={{ startDecorator: { sx: { marginRight: 1 } } }}
                >
                  Payment Methods
                </Typography>
                <Divider />
              </Stack>

              {paymentMethods.length === 0 ? (
                <Card variant="outlined">
                  <Typography level="body2" textColor="text.secondary">
                    No payment methods configured yet.
                  </Typography>
                </Card>
              ) : (
                <Stack gap={2}>
                  {paymentMethods.map((method, index) => (
                    <Card key={method.name} variant="outlined">
                      <Stack gap={2}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Stack direction="row" alignItems="center" gap={1.5}>
                            <Avatar
                              size="lg"
                              color={method.color}
                              variant="soft"
                              sx={{
                                borderRadius: ".5rem",
                              }}
                            >
                              {method.icon}
                            </Avatar>
                            <Typography level="title-lg" fontWeight="lg">
                              {method.name}
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack gap={1}>
                          <Typography level="body2" fontWeight="bold">
                            Wallet Address:
                          </Typography>
                          <Stack
                            direction="row"
                            gap={1}
                            sx={{
                              alignItems: "stretch",
                            }}
                          >
                            <Input
                              readOnly
                              value={method.address}
                              variant="outlined"
                              sx={{
                                flex: 1,
                                fontFamily: "monospace",
                                fontSize: "0.875rem",
                              }}
                            />
                            <IconButton
                              color={copiedIndex === index ? "success" : "neutral"}
                              variant="outlined"
                              onClick={() => copyToClipboard(method.address, index)}
                              sx={{
                                minWidth: "48px",
                              }}
                            >
                              {copiedIndex === index ? <TbCheck /> : <TbCopy />}
                            </IconButton>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              )}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

