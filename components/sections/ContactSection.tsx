'use client';

import SectionBadge from '@/components/SectionBadge';
import { CodeXml, ArrowRight, MapPin, Code } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSendEmail = async (formData: FormData) => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email sending failed:', errorData);
      throw new Error(errorData.error || 'Failed to send email');
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-12 shadow-xl md:p-16">
            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-3xl bg-white/10 dark:bg-white/5 blur-3xl"></div>
                <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border-4 border-white/40 dark:border-white/30 bg-white/20 dark:bg-white/10 backdrop-blur-sm shadow-2xl">
                  <CodeXml className="lucide lucide-code-xml h-20 w-20 text-primary" />
                </div>
                <div className="absolute left-8 top-12 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/40 dark:border-white/30 bg-white/20 dark:bg-white/10 backdrop-blur-sm shadow-lg">
                  <CodeXml className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute bottom-16 right-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 dark:border-white/30 bg-white/20 dark:bg-white/10 backdrop-blur-sm shadow-lg">
                  <Code className="h-7 w-7 text-inherint" />
                </div>
              </div>
            </div>
            <div className="relative max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <SectionBadge title="Let's Work Together" />
              </div>
              <h2 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">Build your next exciting project</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">I'm open to engaging in exciting opportunities and projects. If you're interested in working with me or have any software development problems, let's connect.</p>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 bg-primary hover:bg-primary/90"
                >
                  Talk to me
                  <ArrowRight className="lucide lucide-arrow-right h-4 w-4" />
                </button>
                <a href="https://drive.google.com/file/d/1edDH-ajgF9qH8odBo88jv1yg1-XpkVUI/view" target="_blank" rel="noreferrer" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 gap-2 border-foreground/20 bg-background hover:bg-accent">Download Resume</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="lucide lucide-map-pin h-4 w-4" />
                <span>Based in the Philippines</span>
              </div>
            </div>
          </div>
        </div>
        <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} onSend={handleSendEmail} />
      </div>
    </section>
  );
};

export default ContactSection;