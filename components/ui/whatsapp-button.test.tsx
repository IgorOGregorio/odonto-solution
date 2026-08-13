import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

describe("WhatsAppButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("encodes a custom message in the WhatsApp href", () => {
    const message = "Quero avaliar harmonização facial";
    render(<WhatsAppButton message={message} />);

    const link = screen.getByRole("link", {
      name: siteConfig.whatsapp.ctaLabel,
    });
    expect(link).toHaveAttribute("href", getWhatsAppUrl(message));
    expect(link.getAttribute("href")).toContain(encodeURIComponent(message));
  });

  it("keeps the default message when none is passed", () => {
    render(<WhatsAppButton />);

    const link = screen.getByRole("link", {
      name: siteConfig.whatsapp.ctaLabel,
    });
    expect(link).toHaveAttribute("href", getWhatsAppUrl());
  });

  it("keeps the FAB on the default message", () => {
    render(<WhatsAppButton variant="fab" />);

    const link = screen.getByRole("link", {
      name: siteConfig.whatsapp.ctaLabel,
    });
    expect(link).toHaveAttribute("href", getWhatsAppUrl());
  });
});
