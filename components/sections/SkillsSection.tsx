'use client';

import SectionBadge from '@/components/SectionBadge';
import { FaReact, FaAngular } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiPython, SiExpress, SiDjango, SiSupabase, SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiGit, SiFigma } from 'react-icons/si';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center space-y-6">
          <SectionBadge title="Technical Skills" />
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Technologies I Work With
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-lg font-semibold">Frontend Development</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <FaReact className="h-7 w-7 text-blue-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiNextdotjs className="h-7 w-7 text-black dark:text-white" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <FaAngular className="h-7 w-7 text-red-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Angular</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiTailwindcss className="h-7 w-7 text-cyan-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiTypescript className="h-7 w-7 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">TypeScript</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-lg font-semibold">Backend Development</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiJavascript className="h-7 w-7 text-yellow-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiPython className="h-7 w-7 text-yellow-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiExpress className="h-7 w-7 text-gray-800 dark:text-white" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Express</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiDjango className="h-7 w-7 text-green-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Django</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-lg font-semibold">Databases</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiPostgresql className="h-7 w-7 text-blue-700" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiMysql className="h-7 w-7 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiMongodb className="h-7 w-7 text-green-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiSupabase className="h-7 w-7 text-teal-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Supabase</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiFirebase className="h-7 w-7 text-yellow-500" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Firebase</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-6 text-center text-lg font-semibold">Tools &amp; Design</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiGit className="h-7 w-7 text-orange-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Git</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent">
                  <SiFigma className="h-7 w-7 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;