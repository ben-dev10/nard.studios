"use client";
import PopoverUI from "@/components/_ui/popover-ui";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Info, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

interface ExchangeRates {
  NGN: number;
  GHS: number;
  lastUpdated: string;
}

type Currency = "USD" | "NGN" | "GHS";

const DEFAULT_RATES: ExchangeRates = {
  NGN: 1580.25,
  GHS: 15.92,
  lastUpdated: "Dec 2025",
};

const PRICING_TIERS = [
  {
    name: "Starter Pack",
    priceUSD: 109,
  },
  {
    name: "Premium",
    priceUSD: 299,
  },
  {
    name: "Pro",
    priceUSD: 599,
  },
];

export default function PricingTable() {
  const [currency, setCurrency] = useState<Currency | string>("USD");
  const [rates, setRates] = useState<ExchangeRates>(DEFAULT_RATES);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string>("");

  const formatPrice = (price: number): string => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // add comma separator for values beyond thousand
  const convertPrice = (usdPrice: number): string => {
    if (currency === "USD") return formatPrice(usdPrice);
    if (currency === "NGN") return formatPrice(usdPrice * rates.NGN);
    return formatPrice(usdPrice * rates.GHS);
  };

  const getCurrencySymbol = (): string => {
    if (currency === "USD") return "$";
    if (currency === "NGN") return "₦";
    return "₵";
  };

  const refreshRates = async (): Promise<void> => {
    setIsRefreshing(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch rates");
      }

      const data = await response.json();

      const newRates: ExchangeRates = {
        NGN: data.rates.NGN || DEFAULT_RATES.NGN,
        GHS: data.rates.GHS || DEFAULT_RATES.GHS,
        lastUpdated: new Date().toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
      };

      setRates(newRates);
      toast.success("Rates updated successfully.");
    } catch (err) {
      toast.error("Failed to update rates");
      console.error("Error fetching exchange rates:", err);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="_pricing+table">
      <div className="_pricing-toggle mt-15">
        <div className="_toggle+rates mb-4 flex items-center gap-4">
          <div className="_currency-toggle-btns inline-flex rounded-full bg-white p-2 shadow-lg">
            {["USD", "NGN", "GHS"].map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  currency === curr
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={refreshRates}
            disabled={isRefreshing}
            className="_refresh-btn rounded-full bg-white p-4 shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-50"
            title="Refresh exchange rates"
          >
            <RefreshCw
              className={`text-primary h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </button>
        </div>

        <div className="_rates+error-info text-sm text-gray-500">
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <span>Exchange rates as of {rates.lastUpdated}</span>
          )}
        </div>
      </div>

      <div className="_pricing-cards mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="_starter-card border-border/50 flex flex-col justify-between rounded-lg border bg-white p-8 lg:max-h-max">
          <div className="_wrapper">
            <h6 className="font-FigtreeR mb-2 font-[700]">Starter Pack</h6>
            <div className="_price+label mb-10 flex gap-2">
              <h2 className="_price">
                <span className="mr-2">{getCurrencySymbol()}</span>
                {convertPrice(PRICING_TIERS[0].priceUSD)}
              </h2>
              <p className="self-end pb-1 text-neutral-500">/per project</p>
            </div>

            <div className="_list text-[0.9rem]">
              {[
                "Free style guide",
                "4 pages max",
                "1 round of revisions",
                <div key={4} className="flex items-center gap-2">
                  <p className="text-[0.9rem]">
                    14-day post-launch maintenance warranty
                  </p>
                  <PopoverUI
                    content="I will make updates to the site after launch to fix bugs or minor content changes for free
                      only for 14 days after launch, beyond which any maintenance will incur a small fee."
                    trigger={<Info className="size-3" />}
                  />
                </div>,
              ].map((item, index) => (
                <div key={index} className="mb-2 flex items-center gap-1">
                  <CheckCircle2 className="size-5 shrink-0 fill-black stroke-white" />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-12 w-full">Get Started</Button>
        </div>

        <div className="_premium-card border-n-accent/55 flex flex-col justify-between rounded-lg border-[2px] bg-white p-8 lg:max-h-max">
          <div className="_wrapper">
            <div className="_badge bg-n-accent -mt-4 mb-2 max-w-max rounded-full p-1 px-3 text-[0.80rem] text-white">
              Most popular
            </div>
            <h6 className="font-FigtreeR mb-2 font-[700]">Premium</h6>
            <div className="_price+label mb-10 flex gap-2">
              <h2 className="_price">
                <span className="mr-2">{getCurrencySymbol()}</span>
                {convertPrice(PRICING_TIERS[1].priceUSD)}
              </h2>
              <p className="self-end pb-1 text-neutral-500">/per project</p>
            </div>

            <div className="_list !text-[0.9rem]">
              {[
                "Free style guide",
                "8 pages max",
                "3 rounds of revisions",
                <div key={4} className="flex items-center gap-2">
                  <p className="!text-[0.9rem]">
                    21-day post-launch maintenance warranty
                  </p>
                  <PopoverUI
                    content="I will make updates to the site after launch to fix bugs or minor content changes for free
                      only for 21 days after launch, beyond which any maintenance will incur a small fee."
                    trigger={<Info className="size-3" />}
                  />
                </div>,
                <div key={5} className="flex items-center gap-2">
                  <p className="!text-[0.9rem]">2 graphic design requests</p>
                  <PopoverUI
                    content={
                      <div>
                        You get 2 optional free design graphics; for say launch
                        ads or flyers to post on social media during the launch
                        period. See{" "}
                        <Link
                          href="/gallery/#design-tab"
                          className="text-n-accent underline"
                        >
                          samples
                        </Link>
                      </div>
                    }
                    trigger={<Info className="size-3" />}
                  />
                </div>,
                "Auth, CMS",
              ].map((item, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 fill-black stroke-white" />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-12 w-full">Get Started</Button>
        </div>

        <div className="_pro-card flex flex-col justify-between rounded-lg bg-black p-8 text-white md:max-lg:col-span-2 lg:max-h-max">
          <div className="_wrapper">
            <h6 className="font-FigtreeR mb-2 font-[700]">Pro</h6>
            <div className="_price+label mb-10 flex gap-2">
              <h2 className="_price">
                <span className="mr-2">{getCurrencySymbol()}</span>
                {convertPrice(PRICING_TIERS[2].priceUSD)}
              </h2>
              <p className="self-end pb-1 text-neutral-400">/per project</p>
            </div>

            <div className="_list !text-[0.9rem]">
              {[
                "Free style guide",
                "18 pages max",
                "4 rounds of revisions",
                <div key={4} className="flex items-center gap-2">
                  <p className="!text-[0.9rem]">
                    30-day post-launch maintenance warranty
                  </p>
                  <PopoverUI
                    className="border-black bg-black text-white"
                    content="I will make updates to the site after launch to fix bugs or minor content changes for free
                      only for 30 days after launch, beyond which any maintenance will incur a small fee."
                    trigger={<Info className="size-3" />}
                  />
                </div>,
                <div key={5} className="flex items-center gap-2">
                  <p className="!text-[0.9rem]">6 graphic design requests </p>
                  <PopoverUI
                    className="border-black bg-black text-white"
                    content={
                      <div>
                        You get 6 optional free design graphics; for say launch
                        ads or flyers to post on social media during the launch
                        period. See{" "}
                        <Link
                          href="/gallery/#design-tab"
                          className="text-pink-300 underline"
                        >
                          samples
                        </Link>
                      </div>
                    }
                    trigger={<Info className="size-3" />}
                  />
                </div>,
                "Auth, CMS",
                "15% discount on next service request",
              ].map((item, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 fill-white stroke-black" />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-25 w-full bg-white text-black hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
