import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import CryptocurrrencySection from "../components/sections/CryptocurrencySection";
import BuyAndTradeSection from "../../../../nefa/src/components/sections/BuyAndTradeSection";
import PartnerSection from "../components/sections/PartnerSection";
import CreditCardSection from "../components/sections/CreditCardSection";
import TradingToolsSection from "../components/sections/TradingToolsSection";
import SecuritySection from "../components/sections/SecuritySection";
import StepSection from "../components/sections/StepSection";
import FaqSection from "../components/sections/FAQSection";
import BackToTopSection from "../components/sections/BackToTopSection";

export default function Index() {
    return (
        <Layout>
            <HeroSection />
            <CryptocurrrencySection />
            <BuyAndTradeSection />
            <PartnerSection />
            <CreditCardSection />
            <TradingToolsSection />
            <SecuritySection />
            <StepSection />
            <FaqSection />
            <BackToTopSection />
        </Layout>
    )
}