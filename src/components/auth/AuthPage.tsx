import { AuthCard } from "./AuthCard";
import { AuthForm } from "./AuthForm";
import { AuthShell } from "./AuthShell";
import { SocialAuth } from "./SocialAuth";
import type { AuthPageContent } from "@/types";

export function AuthPage({ content }: { content: AuthPageContent }) {
  return (
    <AuthShell title={content.title} description={content.description}>
      <AuthCard
        eyebrow={content.eyebrow}
        heading={content.heading}
        footer={content.footer}
        className={content.cardClassName}
      >
        <AuthForm fields={content.fields} submitLabel={content.submitLabel} />
        {content.showSocial && <SocialAuth />}
      </AuthCard>
    </AuthShell>
  );
}