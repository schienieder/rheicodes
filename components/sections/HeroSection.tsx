'use client'

import SectionBadge from "@/components/SectionBadge"
import { getSectionObj } from "@/utils/functions"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MoveRight } from "lucide-react"

const HeroSection = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center pt-16 pb-24">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image & Profile */}
                    <div className="justify-self-center flex flex-col items-center lg:items-start gap-3">
                        {/* <SectionBadge title={String(getSectionObj('hero')?.badgeTitle)} /> */}
                        <div className="w-32 h-32 md:w-52 md:h-52 overflow-hidden rounded-xl border-4 border-white ring ring-black">
                            <Image
                                src="/images/professional-headshot.png"
                                alt="Professional Headshot"
                                width={250}
                                height={250}
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-center lg:items-start">
                            <h4 className="text-xl md:text-3xl font-bold leading-tight">Justine Rhei Torres</h4>
                            <p className="text-md md:text-lg text-gray-600 leading-relaxed">Full-Stack Web Developer</p>
                        </div>

                        <div className="flex gap-4 mt-2">
                            <Button
                                size="icon"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => window.open(getSectionObj('hero')?.socialLinks?.github, '_blank')}
                            >
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => window.open(getSectionObj('hero')?.socialLinks?.linkedin, '_blank')}
                            >
                                <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                className="rounded-full"
                                onClick={() => {
                                    const email = getSectionObj('hero')?.socialLinks?.email;
                                    if (email) {
                                        window.location.href = `mailto:${email}`;
                                    }
                                }}
                            >
                                <Mail className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="flex flex-col items-start justify-center space-y-6">
                        <SectionBadge title={String(getSectionObj('hero')?.badgeTitle)} />
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Specializing in <span className="text-blue-600">Microservices</span> & <span className="text-blue-600">Scalable</span> Web Applications
                        </h1>

                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            Creates scalable, maintainable solutions that solve real business problems. Whether it's building complex automation systems, developing intuitive user interfaces, or architecting robust backend services, I bring a comprehensive approach to every project.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Get in Touch <MoveRight className="h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                Download Resume
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
