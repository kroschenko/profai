import { FormSection } from "@/components/form-section/form-section";
import styles from "./page.module.css";
import { WelcomeSection } from "@/components/welcome-section/welcome-section";
import { ResultsSection } from "@/components/results-section/results-section";
import { FooterSection } from "@/components/footer-section/footer-section";

export default function Main() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WelcomeSection />
        <FormSection />
        <ResultsSection />
        <FooterSection />
      </main>
    </div>
  );
}
