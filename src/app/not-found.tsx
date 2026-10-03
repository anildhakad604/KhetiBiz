import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeader";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow tone="leaf">Error 404</Eyebrow>
      <h1 className="mt-6 font-serif text-[2.75rem] leading-tight tracking-[-0.03em] text-ink sm:text-[3.5rem]">
        This field lies fallow.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you’re looking for has moved or never existed. Let’s get you back to the latest stories.
      </p>
      <ButtonLink href="/" size="lg" className="mt-10">
        Back to homepage
      </ButtonLink>
    </Container>
  );
}
